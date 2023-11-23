import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SortByWordService {
  private inputData = new BehaviorSubject<string>('');
  inputData$ = this.inputData.asObservable();

  setData(inputData: string): void {
    this.inputData.next(inputData);
  }
}
