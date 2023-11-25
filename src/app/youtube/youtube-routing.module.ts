import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoCardComponent } from './pages/video-card/video-card.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/list-page', pathMatch: 'full'
  },
  {
    path: 'list-page',
    component: ListPageComponent
  },
  {
    path: 'video/:id',
    component: VideoCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
