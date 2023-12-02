import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteRoutingModule } from './favorite-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { FavoritePageComponent } from './pages/favorite/favorite.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { YoutubeModule } from "../youtube/youtube.module";


@NgModule({
  declarations: [
    FavoritePageComponent,
    FavoriteListComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    MaterialModule,
    SharedModule,
    YoutubeModule
  ]
})
export class FavoriteModule { }
