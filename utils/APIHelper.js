// const app = require('../appsettings.json');
import Router from 'next/router';
import { exception } from 'react-ga';
import * as Cookie from './CookieHelper';


function fetchMembersList() {
  return GetConfig().then((resolve) => {
    const url = `${resolve.strapiUrl}/members`;
    const res = fetch(url);
    const members = res;
    return members;
  })
}

function fetchSponsorslist() {
  return GetConfig().then((resolve) => {
    const url = `${resolve.strapiUrl}/sponsors?`;
    const res = fetch(url);
    const sponsors = res;
    return sponsors;
  })
}

function fetchNews(category,startAt, limitTo, exclude, query) {
  return GetConfig().then((resolve) => {
    const url = `${resolve.strapiUrl}/news/
    ${category ? `?category=${category}&` : '?'}
    _sort=publishOn:DESC
    &_start=${startAt || 0}
    ${limitTo ? `&_limit=${limitTo}` : ''}
    ${exclude ? `&_id_ne=${exclude}` : ''}
    &title_contains=${query}
    `.replace(/\s/g, ''); // replace all white spaces caused by prettier's formatting

    const res = fetch(url);
    const news = res;
    return news;
  })

}


function fetchFAQS () {
  return GetConfig().then((resolve) => {
    const url = `${resolve.strapiUrl}/faqs?_limit=100`;
    const res = fetch(url);
    const faqs = res;
    return faqs;
  })
}


function fetchNonTradingDays() {
  return GetConfig().then((resolve) => {
    const url = `${resolve.strapiUrl}/nontradingdays?_limit=15`;
    const res = fetch(url);
    const nontradingdays = res;
    return nontradingdays;
  })
}

function handleAppsettingObject (obj) {
  var newStructure = [];
  if(obj) {
    var keyvalue = obj.split(',');
    keyvalue.forEach((set) => {
      var key = set.split(':')[0];
      var value = set.split(':')[1];
      newStructure.push({TenantId: key, BranchId: value});
    });
  }
  return newStructure;
}

function fetchConfig() {
  return fetch('/appsettings.json').then((resolve) => {
    return resolve.json();
  }).then((response) => {
    let appsettings = response;
    let conf = {...appsettings};
    
    conf['IsLoginEnabled'] = conf['IsLoginEnabled'] === 'true' || conf['IsLoginEnabled'] === true ? true : false;
    conf['IsSignUpEnabled'] = conf['IsSignUpEnabled'] === 'true' || conf['IsSignUpEnabled'] ===  true ? true : false;
    conf['IsPTLoginEnabled'] = conf['IsPTLoginEnabled'] === 'true' || conf['IsPTLoginEnabled'] ===  true ? true : false;
    conf['HasProspectus'] = conf['HasProspectus'] === 'true' || conf['HasProspectus'] ===  true ? true : false;
    conf['HasBitPay'] = conf['HasBitPay'] === 'true' || conf['HasBitPay'] ===  true ? true : false;
    conf['BranchIdByTenant'] = conf['BranchIdByTenant'] ? handleAppsettingObject(conf['BranchIdByTenant']) : [];

    sessionStorage.setItem('configa', JSON.stringify(conf));
    return response;
  }).catch((err) => {
    console.log(err, 'err')
  })
}

function GetConfig() {
  const config = sessionStorage.getItem('configa');
  
  if(!window.location.origin.includes('localhost')) {
    
    if(config !== null && config !== undefined) {
      return new Promise(function(resolve, reject) {
        resolve(JSON.parse(config));
      });
    } else {
      return fetchConfig();
    }
  } else {
    return new Promise(function(resolve, reject) {
      let appsettings = require('../appsettings.json');
      let conf = {...appsettings};
      conf['IsLoginEnabled'] = conf['IsLoginEnabled'] === 'true' || conf['IsLoginEnabled'] === true ? true : false;
      conf['IsSignUpEnabled'] = conf['IsSignUpEnabled'] === 'true' || conf['IsSignUpEnabled'] === true ? true : false;
      conf['IsPTLoginEnabled'] = conf['IsPTLoginEnabled'] === 'true' || conf['IsPTLoginEnabled'] ===  true ? true : false;
      conf['HasProspectus'] = conf['HasProspectus'] === 'true' || conf['HasProspectus'] ===  true ? true : false;
      conf['HasBitPay'] = conf['HasBitPay'] === 'true' || conf['HasBitPay'] ===  true ? true : false;
      conf['BranchIdByTenant'] = conf['BranchIdByTenant'] ? handleAppsettingObject(conf['BranchIdByTenant']) : [];
      
      sessionStorage.setItem('configa', JSON.stringify(conf));

      resolve(conf);
    });
  }
}


async function GetClientDetails() {

  let token = Cookie.GetAuthToken();

  let options = {
    method: 'GET',
    headers: {
      'Authorization': "Bearer " + token
    }
  }
  
  return GetConfig().then((config) => {
    return fetch(config.DataService + '/Data/Client', options).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).catch((err) => {
      
    });
  })

};

async function GetClientBankAccounts(){
  let token = Cookie.GetAuthToken();
  let options = {
    method: 'GET',
    headers: {
      'Authorization': "Bearer " + token
    }
  }

  return GetConfig().then((config) => {
    return fetch(config.DataService + '/Data/GetClientBankAccounts', options).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).catch((err) => {
      
    });
  })
}

async function GetDropDownData() {

  let token = Cookie.GetAuthToken();

  let options = {
    method: 'GET',
    headers: {
      'Authorization': "Bearer " + token
    }
  }
  return GetConfig().then((config) => {

    return fetch(config.DataService + '/Data/DropDownDataSecure', options).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).catch((err) => {
      console.log(err) 
    });
  })

};

async function UpdateLegalTandCs(version, recieveMarketing) {

  let token =Cookie.GetAuthToken();
  let options = {
    method: 'PATCH',
    headers: {
      'Authorization': "Bearer " + token,
      "content-type": "application/json"
    }
  }
  return GetConfig().then((config) => {
    return fetch(config.DataService + '/Data/UpdateLegalTandCs/?tandCsVersion=' + version + '&agreementUrl=https://merj-files.s3-eu-west-1.amazonaws.com/MERJ+General+Mandate+v2.0.pdf&recieveMarketing='+ recieveMarketing, options).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).catch((err) => {
      console.log("err", err);
    });
  })
};

async function GetTenantBankingDetails(currency){
  let token =Cookie.GetAuthToken();
  let options = {
      method: 'GET',
      headers: {
        'Authorization': "Bearer " + token,
        "content-type": "application/json"
      }
  }


  return GetConfig().then((config) => {
    return fetch(config.DataService + '/Data/GetTenantBankingDetails/' + currency, options ).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).catch((err) => {
      console.log("err", err);
    });
  })
}

async function SaveClientDetails(clientDetails) {

  let token = Cookie.GetAuthToken();

  let data =  JSON.stringify(clientDetails);
  let options = {
    method: 'POST',
    headers: {
      'Authorization': "Bearer " + token,
      "content-type": "application/json"
    },
    body: data
  }
  return GetConfig().then((config) => {

    return fetch(config.DataService + '/Data/Client', options).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).then((response) => {
      return response;
    })
    .catch((err) => {
      
    });
  })
};



async function RequestWithdraw(WithdrawalModel) {

  let token = Cookie.GetAuthToken();

  let data =  JSON.stringify(WithdrawalModel);
  let options = {
    method: 'POST',
    headers: {
     'Authorization': "Bearer " + token,
      "content-type": "application/json"
    },
    body: data
  }
  return GetConfig().then((config) => {

    return fetch(config.DataServicev2 + '/Banking/withdraw', options).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).then((response) => {
      return response;
    })
    .catch((err) => {
      
    });
  })
};

async function AddClientOffshoreBankAccount(clientBankDetails){
  let token = Cookie.GetAuthToken();

  let data =  JSON.stringify(clientBankDetails);
  let options = {
    method: 'PATCH',
    headers: {
      'Authorization': "Bearer " + token,
      "content-type": "application/json"
    },
    body: data
  }
  return GetConfig().then((config) => {

    return fetch(config.DataService + '/Data/AddClientOffshoreBankAccount', options).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).then((response) => {
      return response;
    })
    .catch((err) => {
      
    });
  })
};


async function GetBitPayInvoiceUrl(price, currency){
  let token = Cookie.GetAuthToken();
  let data =  JSON.stringify({Price: Number(price), Currency: currency});

  let options = {
    method: 'POST',
    headers: {
      'Authorization': "Bearer " + token,
      "content-type": "application/json"
    },
    body: data
  }
  return GetConfig().then((config) => {

    return fetch(config.DataService + '/Data/GetBitPayInvoiceUrl', options).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).then((response) => {
      return response;
    })
    .catch((err) => {
      
    });
  })
};

async function GetBitPayInvoiceId(price, currency){
  let token = Cookie.GetAuthToken();
  let data =  JSON.stringify({Price: Number(price), Currency: currency});

  let options = {
    method: 'POST',
    headers: {
      'Authorization': "Bearer " + token,
      "content-type": "application/json"
    },
    body: data
  }
  return GetConfig().then((config) => {

    return fetch(config.DataService + '/Data/GetBitPayInvoiceId', options).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).then((response) => {
      return response;
    })
    .catch((err) => {
      
    });
  })
};

async function GetClientStatus(){
  let token = Cookie.GetAuthToken();
  let options = {
    method: 'GET',
    headers:{
      'Authorization': "Bearer " + token
    }
  }
  return GetConfig().then((config) => {
    return fetch(config.DataService +'/Data/Status', options).then((resolve) =>{
      if (resolve.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign(`/login/?returnUrl=${window.location.pathname}`);
        });
      }
      return resolve.json();
    }).then((response) => {
      if (response.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign(`/login/?returnUrl=${window.location.pathname}`);
        });
      }
      return response;
    })
    .catch((err)=>{
      window.location.assign(`/login/?returnUrl=${window.location.pathname}`);
    });
  })

}

async function GetPortfolio(){
  let token = Cookie.GetAuthToken();
  let options = {
    method: 'GET',
    headers:{
      'Authorization': "Bearer " + token
    }
  }
  return GetConfig().then((config) => {
    return fetch(config.DataService +'/Data/Trading', options).then((resolve) =>{
      if (resolve.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return resolve.json();
    })
      .catch(() => {
        window.location.assign('/login');
      });
  })
}

async function GetAccounts() {

  let token = Cookie.GetAuthToken();
  let options = {
    method: 'GET',
    headers: {
      'Authorization': "Bearer " + token
    }
  }
  return GetConfig().then((config) => {
    return fetch(config.DataServicev2 + '/Account', options).then((resolve) => {
      if (resolve.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return resolve.json();
    })
      .catch(() => {
        window.location.assign('/login');
      });
  })
}

async function GetPtToken()
{
    let token = Cookie.GetAuthToken();
    let options = {
      method: 'GET',
      headers: {
        'Authorization': "Bearer " + token
      }
    }
    return GetConfig().then((config) => {
      return fetch(config.DataServicev2 + '/Account/PtTokens', options).then((resolve) => {
        if (resolve.status === 401) {
          Cookie.DeleteCookie(this.context, 'Authorization', () => {
            window.location.assign('/login');
          });
        }
        return resolve.json();
      })
        .catch(() => {
          window.location.assign('/login');
        });
    })
}

async function GetTradingInformation(accountId) {
  
  let token = Cookie.GetAuthToken();
  let options = {
    method: 'GET',
    headers: {
      'Authorization': "Bearer " + token
    }
  }

  return GetConfig().then((config) => {
    return fetch(config.DataServicev2 + '/Account/' + accountId + '/trading', options).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).catch((err) => {
      console.log("err", err);
    });
  })


}

async function GetWithdrawalFee(accountId)
{
  let token = Cookie.GetAuthToken();
  let options = {
    method: 'GET',
    headers: {
      'Authorization': "Bearer " + token
    }
  }

  return GetConfig().then((config) => {
    return fetch(config.DataServicev2 + '/Banking/withdraw/template/' + accountId, options).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).catch((err) => {
      console.log("err", err);
    });
  })
}

async function GetDocumentUploadLink(uploadModel) {

  let token = Cookie.GetAuthToken();
  let obj = {
    FileName: uploadModel.FileDetails.name,
    ContentType: uploadModel.ContentType,
    Tags: {
      systemtag: uploadModel.Tags
    }
  };

  let options = {
    method: 'POST',
    headers: {
      'Authorization': "Bearer " + token,
      "content-type": "application/json"
    },
    body: JSON.stringify({ ...obj })
  };
  return GetConfig().then((config) => {

    return fetch(config.DocService + '/Client/File', options).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).catch((err) => {
    });
  })
};


async function ValidateAuthToken() {

  let token = Cookie.GetAuthToken();
  let options = {
    method: 'GET',
    headers: {
      'Authorization': "Bearer " + token
    }
  }
  return GetConfig().then((config) => {
    return fetch(config.SSOService + '/Login/ValidateAuthToken', options).then((res) => {
      return res.json();
    }).catch((err) => {
  });
});


}

async function RetrieveDocuments() {

  let token = Cookie.GetAuthToken();

  var result;

  let options = {
    method: 'GET',
    headers: {
      'Authorization': "Bearer " + token
    }
  }
  return GetConfig().then((config) => {
    return fetch(config.DocService + '/Client/FilePending', options).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).catch((err) => {

    });
  })
};

async function UploadDocumentToS3(file, uploadLink) {
  let options = {
    method: 'PUT',
    headers: {
      'content-type': 'multipart/form-data'
    },
    body: file
  };

  return await fetch(uploadLink, options);
};

async function UploadDocument(file) {
  let uploadModel = { ...file };

  return GetDocumentUploadLink(uploadModel)
    .then((res) => {
      if(!res.Success)
        throw new TypeError(res.Message);
      UploadDocumentToS3(file.FileDetails, res.Data.Url)
    })
    .catch((err) => {
      throw err;
    });
};


async function SetClientAwaitingKycState() {
  let token = Cookie.GetAuthToken();

  let options = {
    method: 'PATCH',
    headers: {
      'Authorization': "Bearer " + token,
      "content-type": "application/json"
    },
  }
  return GetConfig().then((config) => {

    return fetch(config.DataService + "/Data/SetClientAwaitingKycState", options)
      .then(response => {
        if (response.status === 401) {
          Cookie.DeleteCookie(this.context, 'Authorization', () => {
            window.location.assign('/login');
          });
        }
        return response.json();
      })
      .catch(err => {

      });
  })
};
async function GetUserDataDetails() {

  let token = Cookie.GetAuthToken();

  let options = {
    method: 'GET',
    headers: {
      'Authorization': "Bearer " + token
    }
  }

  return GetConfig().then((config) => {
    return fetch(config.DataService + '/Data/User', options).then((res) => {
      if (res.status === 401) {
        Cookie.DeleteCookie(this.context, 'Authorization', () => {
          window.location.assign('/login');
        });
      }
      return res.json();
    }).catch((err) => {

    });
  })

};

function GetDocTags(applicantType) {
  let options = {
    method: 'GET'
  }

  return GetConfig().then((config) => {
    return fetch(config.DocService + '/Tag/?ApplicantType=' + applicantType +
      '&DocType=All&IsOnBoarding=true&IsSa=false&IsFx=false&IsBee=false&IsLegacy=false&IsClientViewing=true', options).then((resolve) => {
        if (resolve.status === 401) {
          Cookie.DeleteCookie(this.context, 'Authorization', () => {
            window.location.assign('/login');
          });
        }
        return resolve.json();
      }).then((response) => {
        if (response.status === 401) {
          Cookie.DeleteCookie(this.context, 'Authorization', () => {
            window.location.assign('/login');
          });
        }
        return response.Data;
      })
      .catch((err) => {
        window.location.assign('/login');
      });
  })

}

function fetchNewsArticlesCount(category, query) {
  return GetConfig().then((resolve) => {
    const url = `${resolve.strapiUrl}/news/count${category ? `/?category=${category}&title_contains=${query}` : `?title_contains=${query}`}`;
    const res = fetch(url);
    const newsArticlesCount = res;
    return newsArticlesCount;
  })
}




function fetchCommunityVideos() {
  return GetConfig().then((resolve) => {
    const url = `${resolve.strapiUrl}/videos`;
    const res = fetch(url);
    const videos = res;
    return videos;
  })
}


function fetchListings() {
  return GetConfig().then((resolve) => {
    const url = `${resolve.strapiUrl}/listings`;
    const res = fetch(url);
    const listings = res;
    return listings;
  })
}

function GetPTUrl() {
  return GetConfig().then((resolve) => {
    const url = `${resolve.MetaDataService}/Tenant/merj`;
    return fetch(url).then((response) => {
      return response;
    });
  })
}

function GetTenant(publicName) {
  return GetConfig().then((resolve) => {
    const url = `${resolve.MetaDataService}/Tenant/${publicName}`;
    return fetch(url).then((response) => {
      return response;
    });
  })
}

function getArticle(id) {
  return GetConfig().then((resolve) => {
    const res = fetch(`${resolve.strapiUrl}/news/?_id=${id}`);
    const article = res;
    return article;
  })
}

function getInvestorRelationsBackgroundInfo() {
  return GetConfig().then((resolve) => {
    const res = fetch(`${resolve.strapiUrl}/backgroundinfos`);
    return res.then((response) => {
      return response;
    })
  })
}

function getInvestorRelationsAnnouncements() {
  return GetConfig().then((resolve) => {
    const res = fetch(`${resolve.strapiUrl}/announcements`);
    return res.then((response) => {
      return response;
    })
  })
}

function getInvestorRelationsCalendar() {
  return GetConfig().then((resolve) => {
    const res = fetch(`${resolve.strapiUrl}/calendars`);
    return res.then((response) => {
      return response;
    })
  })
}


function getVideoMetaData(id) {
  return GetConfig().then((resolve) => {
    const url = `${resolve.strapiUrl}/previewvideos/?_id=${id}`;
    const res = fetch(url);
    const video = res;
    return video;
  })
}

function getDate() {
  return GetConfig().then((resolve) => {
    return fetch(`${resolve.strapiUrl}/dates?_id=5d31e37e2793441ad83a9129`);
  })
}

function fetchShares() {
  return GetConfig().then((resolve) => {
    const res = fetch(`${resolve.strapiUrl}/shares`);
    const shares = res;
    return shares;
  })
}

export { getInvestorRelationsCalendar, ValidateAuthToken, getInvestorRelationsAnnouncements, getVideoMetaData, GetTenant, GetPTUrl, fetchShares, getDate, getArticle, fetchListings, fetchCommunityVideos, fetchNewsArticlesCount, fetchSponsorslist, fetchMembersList, fetchNews, fetchFAQS, fetchNonTradingDays, GetClientStatus, GetClientDetails, GetDropDownData, UpdateLegalTandCs, SaveClientDetails, GetPortfolio, UploadDocument, RetrieveDocuments, SetClientAwaitingKycState, GetConfig, GetDocTags, GetUserDataDetails, GetClientBankAccounts, AddClientOffshoreBankAccount, GetTenantBankingDetails, GetBitPayInvoiceUrl, RequestWithdraw, GetBitPayInvoiceId, getInvestorRelationsBackgroundInfo, GetAccounts, GetTradingInformation, GetWithdrawalFee, GetPtToken };
