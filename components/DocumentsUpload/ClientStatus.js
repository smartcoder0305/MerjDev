const ClientStatus = Object.freeze({
    Pending: 'Pending',
    PendingReview: 'AwaitingKycState',
    PendingFundAmericaReview: 'AwaitingFundAmericaConfirmation',
    Rejected: 'FicaDocumentsRejectedState',
    FirstChecked: 'AwaitingKycState',
    Completed:'FicaDocumentsAcceptedState' ,
    CompletedWithFunds:'FundsReceivedAndAllocatedState' ,
    PartialDocumentUploadedState : 'PartialDocumentUploadedState',
    DocumentPending:'TandCAccepted'
});

export default ClientStatus;