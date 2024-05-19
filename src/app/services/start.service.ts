import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StartService {
  private _startStateSource = new BehaviorSubject<boolean>(false);

  startState$ = this._startStateSource.asObservable();

  changeStartState(state: boolean) {
    this._startStateSource.next(state);
  }
}
