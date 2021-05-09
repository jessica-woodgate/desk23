import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private customSubject = new Subject<any>();

  sendSlideEvent() {
    this.customSubject.next();
  }

  getSlideEvent() : Observable<any>{
    return this.customSubject.asObservable();
  }

}
