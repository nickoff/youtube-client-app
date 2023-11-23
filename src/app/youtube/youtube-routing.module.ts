import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { VideoCardComponent } from './pages/video-card/video-card.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/search', pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchResultsComponent
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
