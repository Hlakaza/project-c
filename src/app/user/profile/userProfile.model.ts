export class UserProfile {
  constructor(public email: string,
              public role: Array<any>,
              public createdAt: string,
              public updatedAt: string,
              public id: string,
              public profilePic: string) {
  }
}


// tslint:disable-next-line:class-name
export class newPassword {
  constructor(public currentPassword: string, public newPassword: string) {
  }
}
