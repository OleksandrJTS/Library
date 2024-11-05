import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeftMenuService {
  opened: boolean = true;

  constructor() { }

  toggle(): void {
    this.opened = !this.opened;
  }
}
