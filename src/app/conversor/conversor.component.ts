import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  valor: number = 0; // Valor ingresado por el usuario
  conversion: string = 'CtoF'; // Tipo de conversión seleccionada
  resultado: string = ''; // Resultado de la conversión

  calcular(): void {
    switch (this.conversion) {
      case 'CtoF': // °C a °F
        this.resultado = `${(this.valor * 9/5) + 32} °F`;
        break;
      case 'CtoK': // °C a K
        this.resultado = `${this.valor + 273.15} K`;
        break;
      case 'FtoC': // °F a °C
        this.resultado = `${((this.valor - 32) * 5/9).toFixed(2)} °C`;
        break;
      case 'FtoK': // °F a K
        this.resultado = `${(((this.valor - 32) * 5/9) + 273.15).toFixed(3)} K`;
        break;
      case 'KtoC': // K a °C
        this.resultado = `${(this.valor - 273.15).toFixed(1)} °C`;
        break;
      case 'KtoF': // K a °F
        this.resultado = `${(((this.valor - 273.15) * 9/5) + 32).toFixed(1)} °F`;
        break;
      default:
        this.resultado = 'Conversión no válida';
    }
  }
}
