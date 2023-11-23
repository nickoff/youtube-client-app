import {
  AuthErrors,
  AuthEmailErrors,
  AuthPasswordErrors,
  AdminFormErrors
} from "../enums";

const VALIDATION_REGEXP = {
  [AuthErrors.symbolRequired]: /[@!#?]+/,
  [AuthErrors.upperCaseRequired]: /[A-Z]+/,
  [AuthErrors.lowerCaseRequired]: /[a-z]+/,
  [AuthErrors.numericRequired]: /[0-9]+/,
};

const ERRORS_MESSAGES = {
  [AuthErrors.symbolRequired]: 'Symbol (@, !, #, ?) required',
  [AuthErrors.upperCaseRequired]: 'Uppercase letter required',
  [AuthErrors.lowerCaseRequired]: 'Lowercase letter required',
  [AuthErrors.numericRequired]: 'Number required',
  [AuthErrors.lengthRequired]: 'Password must be at least 8 characters long',
};

const ERROR_EMAIL_MESSAGE = {
  [AuthEmailErrors.required]: 'Please enter a login email',
  [AuthEmailErrors.invalidEmail]: 'Invalid email. Example: info@example.com'
};

const ERROR_PASSWORD_MESSAGE = {
  [AuthPasswordErrors.required]: 'Please enter a password',
  [AuthPasswordErrors.invalidPassword]: 'Your password isn\'t strong enough'
};

const ERROR_ADMIN_FORM_MESSAGE = {
  [AdminFormErrors.required]: {
    title: 'Please enter a title',
    description: 'Please enter a description',
    img: 'Please enter a link to the image',
    linkVideo: 'Please enter a link to the video',
    creationDate: 'Please enter a creation date',
    tags: 'Please add at least one tag'
  },
  [AdminFormErrors.minlength]: {
    title: 'The title is too short',
  },
  [AdminFormErrors.maxlength]: {
    title: 'The title is too long',
    description: 'The description is too long'
  },
  [AdminFormErrors.dateNotFuture]: 'Date should not be in the future'
};

export {
  VALIDATION_REGEXP,
  ERRORS_MESSAGES,
  ERROR_EMAIL_MESSAGE,
  ERROR_PASSWORD_MESSAGE,
  ERROR_ADMIN_FORM_MESSAGE
};
