import { FormArray, FormControl } from "@angular/forms";

export interface AdminModel {
  title: FormControl<string>;
  description: FormControl<string>;
  img: FormControl<string>;
  linkVideo: FormControl<string>;
  creationDate: FormControl<string>;
  tags: FormArray<FormControl<string>>
}
