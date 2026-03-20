import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-alarme',
  imports: [],
  templateUrl: './alarme.html',
  styleUrl: './alarme.css',
})
export class Alarme {
  temperaturaAlarme = input<number>(30);

  mensagemTemperatura = computed(() => {
    return this.temperaturaAlarme() >= 80 ? "PERIGO: Superaquecimento!" : "Normal";
  });
}
