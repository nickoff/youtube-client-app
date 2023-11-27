import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  CardItem,
  Id,
  SearchResponse,
} from '../../models';


@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  private readonly SEARCH_API = 'search';
  private readonly VIDEO_API = 'videos';

  constructor(private http: HttpClient) { }

  getVideoIds(payload: string): Observable<string[]> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '12')
      .set('key', environment.API_TOKEN)
      .set('type', 'video')
      .set('q', payload);

    return this.http.get<SearchResponse<CardItem<Id>[]>>(this.SEARCH_API, { params }).pipe(
      map((response: SearchResponse<CardItem<Id>[]>) => response.items.map(item => item.id.videoId))
    );
  }

  getVideosInfo(payload: string): Observable<CardItem[]> {
    const params = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('key', environment.API_TOKEN);
    return this.getVideoIds(payload)
      .pipe(
        switchMap(ids => {
          const paramsWithId = params.set('id', ids.join(','));
          return this.http.get<SearchResponse>(this.VIDEO_API, { params: paramsWithId });
        }),
        map(response => response.items)
      );
  }
}
