import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Painel } from './components/painel/painel'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Painel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('painel-temperatura');
}
