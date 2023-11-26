import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CardItemModel } from 'src/app/shared/models/card-item.model';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  constructor(private router: Router) { }

  navigateToLogin(): void {
    this.router.navigate(['auth', 'login']);
  }

  navigateToRoot(): void {
    this.router.navigate(['']);
  }

  navigateToListPage(): void {
    this.router.navigate(['list-page']);
  }

  navigateToVideo(id: string, item: CardItemModel): void {
    this.router.navigate(['video', id], { state: { item } });
  }
}
