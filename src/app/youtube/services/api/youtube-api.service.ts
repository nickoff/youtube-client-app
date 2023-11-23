import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  CardItem,
  SearchDirtyResponse,
  SearchResponse,
  ShortCardItem
} from '../../models';


@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  private readonly SEARCH_API = 'search';
  private readonly VIDEO_API = 'videos';

  constructor(private http: HttpClient) { }

  getVideoIds(payload: string): Observable<string[]> {
    return this.http.get<SearchDirtyResponse>(this.SEARCH_API, {
      params: {
        part: 'snippet',
        maxResults: '12',
        key: environment.API_TOKEN,
        type: 'video',
        q: payload,
      }
    }).pipe(
      map(response => response.items),
      map((items: ShortCardItem[]) => items.map(item => item.id.videoId))
    );
  }

  getVideosInfo(payload: string): Observable<CardItem[]> {
    return this.getVideoIds(payload)
      .pipe(switchMap(ids => this.http.get<SearchResponse>(this.VIDEO_API, {
        params: {
          part: 'snippet,statistics',
          key: environment.API_TOKEN,
          id: ids.join(','),
        }
      })), map(response => response.items));
  }

  getVideoInfo(videoId: string): Observable<CardItem> {
    return this.http.get<SearchResponse>(this.VIDEO_API, {
      params: {
        part: 'snippet,statistics',
        key: environment.API_TOKEN,
        id: videoId,
      }
    }).pipe(map(response => response.items[0]));
  }
}
