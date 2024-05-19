import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartButtonComponent } from './components/start-button/start-button.component';
import { GameComponent } from './components/game/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartButtonComponent, GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_Tetris';
}
