import { EmailValidator } from '@angular/forms/src/directives/validators';

export class User {
    id: number;
    username: string; // Email
    password: string; //
    // firstName: string; // Name of the person
    // lastName: string;  // surname of person
    // Company Information
    tradingName: string; // Trading Name of company
    registeredCompanyName: string;
    registrationNumber: string;
    physicalAddress: string;
    postalAddress: string;
    tel: string; // business tel
    faxNo: string;
    website: string;
    vatNumber: string;
    // Correspondecne
    accPersonName: string;
    accPersonNo: string;
    accPersonFaxNo: string;
    accPersonEmail: string;
    salesPersonName: string;
    salesPersonNo: string;
    salesPersonEmail: string;
    salesPersonFaxNo: string;
    // documents: File;
}

