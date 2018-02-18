import { Injectable } from '@angular/core';

@Injectable()
export class UploadService {
  http: any;

  constructor() { }
  uploadFile(file) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    this.http.post(URL, formData);
  }
}
