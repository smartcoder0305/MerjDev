
const appsettings = require('../../appsettings.json');
const app = {
  url: 'https://merj.exchange',
  isLoginEnabled: appsettings.IsLoginEnabled === "true" || appsettings.IsLoginEnabled === true ? true : false,
  isSignUpEnabled: appsettings.IsSignUpEnabled === "true" || appsettings.IsSignUpEnabled === true ? true : false,
  IsPTLoginEnabled: appsettings.IsPTLoginEnabled === "true" || appsettings.IsPTLoginEnabled === true ? true : false,
  docService: appsettings.DocService,
  dataService: appsettings.DataService,
  dataServicev2: appsettings.DataServicev2,
  tenantId: appsettings.TenantId,
  branchId: appsettings.BranchId,
  authService: appsettings.AuthService,
  db_url: appsettings.strapiUrl,
  SSOService: appsettings.SSOService,
  presaleDate: 'January 31, 2019',
  mailChimpForms: {
    tokenSale:
      'https://exchange.us19.list-manage.com/subscribe/post?u=d6c443b0f9693f0ab67b2108e&amp;id=6759fd3d76',
    info:
      'https://exchange.us19.list-manage.com/subscribe/post?u=d6c443b0f9693f0ab67b2108e&amp;id=ecb8c36168',
  },
  contact: {
    email: {
      enquiries: 'info@merj.exchange',
      support: 'support@merj.exchange',
    },
    telephone: '+248 434 68 00',
    address:
      'MERJ Exchange Limited, F28 Eden Plaza, Eden Island, PO Box 360, Republic of Seychelles',
  },
  promoVideoURL: 'https://www.youtube.com/watch?v=HTHiWhDbkEw',
  BitPayDefaultAmount: appsettings.BitPayDefaultAmount,
  BitPayCurrency: appsettings.BitPayCurrency,
  Environment: appsettings.Environment
};

module.exports = app;
