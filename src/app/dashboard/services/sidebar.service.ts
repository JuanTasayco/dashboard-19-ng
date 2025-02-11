import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  toggleSidebar = new Subject<boolean>();

  get getSharingObservable(): Observable<boolean> {
    return this.toggleSidebar as Observable<boolean>;
  }

  set setSharingObservable(event: boolean) {
    this.toggleSidebar.next(event);
  }

  constructor() { }
}
