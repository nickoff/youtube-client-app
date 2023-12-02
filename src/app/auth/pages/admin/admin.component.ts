import {
  ChangeDetectorRef, Component, DestroyRef, OnInit
} from '@angular/core';
import {
  FormArray, FormControl, FormGroup, Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AdminActions from 'src/app/store/custom-card/custom-card.action';
import { CustomCard } from 'src/app/store/custom-card';
import { NavigateService } from 'src/app/core/services/navigate/navigate.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { validateDateNotFuture } from '../../services/validate-date-not-future.service';
import { AdminModel } from '../../models';
import { AdminFormErrors } from '../../enums';
import { ERROR_ADMIN_FORM_MESSAGE } from '../../constants';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  isSubmitted = false;
  maxCountTags = 5;

  dataNewCard: FormGroup<AdminModel> = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3), Validators.maxLength(20)] }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.maxLength(255)] }),
    img: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    linkVideo: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    creationDate: new FormControl('', { nonNullable: true, validators: [Validators.required, validateDateNotFuture()] }),
    tags: new FormArray([this.createTag()])
  });

  title!: FormControl;
  description!: FormControl;
  img!: FormControl;
  linkVideo!: FormControl;
  creationDate!: FormControl;
  tags!: FormArray;

  constructor(
    private store: Store,
    private navigateService: NavigateService,
    private destroyRef: DestroyRef,
    private cdr: ChangeDetectorRef
  ) { }

  isShowTitleError = false;
  isShowDescriptionError = false;
  isShowImgError = false;
  isShowLinkVideoError = false;
  isShowCreationDateError = false;
  isShowTagsError = false;
  isShowTagsAddButton = true;
  titleErrors?: string;
  descriptionErrors?: string;
  imgErrors?: string;
  linkVideoErrors?: string;
  creationDateErrors?: string;
  tagsError?: string;

  ngOnInit(): void {
    this.initFormControls();
    this.dataNewCard.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.refreshErrorsState();
        this.cdr.markForCheck();
      });
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.refreshErrorsState();
    if (this.dataNewCard.valid) {
      this.store.dispatch(
        AdminActions.addCustomCard({ customCard: this.dataNewCard.value as CustomCard })
      );
      this.onReset();
      this.navigateService.navigateToListPage();
    }
  }

  onReset(): void {
    this.dataNewCard.reset();
    this.tags.clear();
    this.tags.push(this.createTag());
  }

  addTag(): void {
    if (this.tags.length >= this.maxCountTags
      || !this.tags.valid) return;
    this.tags.push(this.createTag());
  }

  private getShowError(formControl: FormControl | FormArray): boolean {
    return formControl.errors !== null
      && formControl.errors && (formControl.dirty || this.isSubmitted);
  }

  private getShowTagsError(): boolean {
    return this.tags.invalid
      && (this.tags.invalid && (this.tags.dirty || this.isSubmitted));
  }

  private getTitleError(): string | undefined {
    return (this.title.errors?.[AdminFormErrors.minlength]
      && ERROR_ADMIN_FORM_MESSAGE.minlength.title)
      || (this.title.errors?.[AdminFormErrors.maxlength]
        && ERROR_ADMIN_FORM_MESSAGE.maxlength.title)
      || (this.title.errors?.[AdminFormErrors.required]
        && ERROR_ADMIN_FORM_MESSAGE.required.title);
  }

  private getDescriptionError(): string | undefined {
    return this.description.errors?.[AdminFormErrors.maxlength]
      && ERROR_ADMIN_FORM_MESSAGE.maxlength.description;
  }

  private getImgError(): string | undefined {
    return this.img.errors?.[AdminFormErrors.required] && ERROR_ADMIN_FORM_MESSAGE.required.img;
  }

  private getLinkVideoError(): string | undefined {
    return this.linkVideo.errors?.[AdminFormErrors.required]
      && ERROR_ADMIN_FORM_MESSAGE.required.linkVideo;
  }

  private getCreationDateError(): string | undefined {
    return (this.creationDate.errors?.[AdminFormErrors.dateNotFuture]
      && ERROR_ADMIN_FORM_MESSAGE.dateNotFuture)
      || (this.creationDate.errors?.[AdminFormErrors.required]
        && ERROR_ADMIN_FORM_MESSAGE.required.creationDate);
  }

  private createTag(): FormControl {
    const tag = new FormControl('', [Validators.required]);
    return tag;
  }

  private refreshErrorsState(): void {
    this.initErrorsDesplayConditions();
    this.initTextErrors();
  }

  private initErrorsDesplayConditions(): void {
    this.isShowTitleError = this.getShowError(this.title);
    this.isShowDescriptionError = this.getShowError(this.description);
    this.isShowImgError = this.getShowError(this.img);
    this.isShowLinkVideoError = this.getShowError(this.linkVideo);
    this.isShowCreationDateError = this.getShowError(this.creationDate);
    this.isShowTagsError = this.getShowTagsError();
    this.isShowTagsAddButton = this.tags.length < this.maxCountTags || this.tags.invalid;
  }

  private initTextErrors(): void {
    this.titleErrors = this.getTitleError();
    this.descriptionErrors = this.getDescriptionError();
    this.imgErrors = this.getImgError();
    this.linkVideoErrors = this.getLinkVideoError();
    this.creationDateErrors = this.getCreationDateError();
    this.tagsError = ERROR_ADMIN_FORM_MESSAGE.required.tags;
  }

  private initFormControls(): void {
    ({
      title: this.title,
      description: this.description,
      img: this.img,
      linkVideo: this.linkVideo,
      creationDate: this.creationDate,
      tags: this.tags
    } = this.dataNewCard.controls);
  }
}
