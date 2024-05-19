import { Component } from '@angular/core';
import { StartService } from '../../services/start.service';

@Component({
  selector: 'start-button',
  standalone: true,
  imports: [],
  templateUrl: './start-button.component.html',
  styleUrl: './start-button.component.css',
})
export class StartButtonComponent {
  constructor(private _startService: StartService) {}

  start() {
    this._startService.changeStartState(true);
  }
}
