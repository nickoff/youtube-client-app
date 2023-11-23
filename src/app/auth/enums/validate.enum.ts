export enum AuthErrors {
  symbolRequired = 'symbolRequired',
  upperCaseRequired = 'upperCaseRequired',
  lowerCaseRequired = 'lowerCaseRequired',
  numericRequired = 'numericRequired',
  lengthRequired = 'lengthRequired',
}

export enum AuthEmailErrors {
  required = 'required',
  invalidEmail = 'email'
}

export enum AuthPasswordErrors {
  required = 'required',
  invalidPassword = 'validatePasswordStrength'
}

export enum AdminFormErrors {
  required = 'required',
  minlength = 'minlength',
  maxlength = 'maxlength',
  dateNotFuture = 'dateNotFuture'
}
