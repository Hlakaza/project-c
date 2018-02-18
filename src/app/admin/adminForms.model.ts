export class Form {

    constructor(// public textInputOne: string,
  //             public textInputTwo: string,
              public tradingName: string,
              public registeredCompanyName: string,
              public registrationNumber: string,
              public physicalAddress: string,
              public postalAddress: string,
              public tel: string,
              public faxNo: string,
              public website: string,
              public vatNumber: string,
              public accPersonName: string,
              public accPersonNo: string,
              public accPersonFaxNo: string,
              public accPersonEmail: string,
              public salesPersonName: string,
              public salesPersonNo: string,
              public salesPersonEmail: string,
              public salesPersonFaxNo: string,
              public fileUp?: string,
              public userId?: string,
              public formId?: string) {

    // this.textInputOne = textInputOne;
    // this.textInputTwo = textInputTwo;
    this.tradingName = tradingName;
    this.registeredCompanyName = registeredCompanyName;
    this.registrationNumber = registrationNumber;
    this.physicalAddress = physicalAddress;
    this.postalAddress = postalAddress;
    this.tel = tel;
    this.faxNo = faxNo;
    this.website = website;
    this.vatNumber = vatNumber;
    this.accPersonName = accPersonName;
    this.accPersonNo = accPersonNo;
    this.accPersonFaxNo = accPersonFaxNo;
    this.accPersonEmail = accPersonEmail;
    this.salesPersonName = salesPersonName;
    this.salesPersonNo = salesPersonNo;
    this.salesPersonEmail = salesPersonEmail;
    this.salesPersonFaxNo = salesPersonFaxNo;
    this.fileUp       = fileUp;
    this.userId       = userId;
    this.formId       = formId;
  }
}
