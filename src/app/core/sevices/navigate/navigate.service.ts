import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

  navigateToSearch(): void {
    this.router.navigate(['search']);
  }

  navigateToVideo(id: string): void {
    this.router.navigate(['video', id]);
  }
}
