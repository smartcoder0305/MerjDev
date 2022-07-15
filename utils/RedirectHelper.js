import Router from 'next/router';
function ValidateStatus(page, status){
    switch (status) {
        case "RegistrationCompletedState":
            if(page !== 'details') {
                window.location.assign('/details');
            }
            break;
        case "ClientDetailsCompleted":
            if(page !== 'legal') {
                window.location.assign('/legal');
            }
            break;
        case "TandCAccepted":
        case "AwaitingKycState":
        case "KycFirstCheckedState":
        case "AwaitingFundAmericaConfirmation":
        case "FicaDocumentsRejectedState":
        case "PartialDocumentUploadedState":
            if(page !== 'documents-upload') {
                window.location.assign('/documents-upload');
            }
            break;
        case "FicaDocumentsAcceptedState":
        case "FundsReceivedAndAllocatedState":
        case "ApplicationCompletedState":
        case "SharesReceivedState":
        default:
            window.location.assign('/login')
      }

}

export {ValidateStatus};
