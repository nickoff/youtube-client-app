import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LoginIconComponent } from './components/header/components/login-icon/login-icon.component';
import { SearchSettingsComponent } from './components/header/components/search-settings/search-settings.component';
import { SearchInputComponent } from './components/header/components/search-input/search-input.component';
import { LogoComponent } from './components/header/components/logo/logo.component';
import { MaterialModule } from '../shared/material/material.module';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { CoreComponent } from './core.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginIconComponent,
    SearchSettingsComponent,
    SearchInputComponent,
    CoreComponent,
  ],
  imports: [
    LogoComponent,
    BrowserModule,
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    CoreComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ]
})
export class CoreModule { }
