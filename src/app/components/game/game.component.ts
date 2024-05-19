import { Component } from '@angular/core';
import { StartService } from '../../services/start.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'game-component',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  startState: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private _startService: StartService) {}
  ngOnInit() {
    this.subscription = this._startService.startState$.subscribe((state) => {
      this.startState = state;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
