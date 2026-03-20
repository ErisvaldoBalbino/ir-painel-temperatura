import { Component, signal } from '@angular/core';
import { single } from 'rxjs';
import { Alarme } from '../alarme/alarme'

@Component({
  selector: 'app-painel',
  imports: [Alarme],
  templateUrl: './painel.html',
  styleUrl: './painel.css',
})

export class Painel {
  temperatura = signal(30);

  aquecer() {
    this.temperatura.update((value) => value + 10);
  }


  esfriar() {
    this.temperatura.update((value) => value - 10);
  }
}
