import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputSearchService {
  private data = new BehaviorSubject<string>('');
  data$ = this.data.asObservable();

  setData(data: string): void {
    this.data.next(data);
  }

  clearData(): void {
    this.data.next('');
  }
}
