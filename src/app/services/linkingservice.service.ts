import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkingService {
  private statusFile$ = new Subject<any>();
  public statusFile = this.statusFile$.asObservable();
  constructor() { }

  public changes(data){
    this.statusFile$.next(data);
  }
}
