import { FormControl } from "@angular/forms";

export interface CredentialsModel {
  email: FormControl<string>;
  password: FormControl<string>;
}
