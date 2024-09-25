import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis-angular',
  templateUrl: './cinepolis-angular.component.html',
  styleUrl: './cinepolis-angular.component.css'
})
export class CinepolisAngularComponent {
  nombre: string = '';
  compradores: number = 1;
  boletos: number = 0;
  usaCineco: boolean = false;
  precioTotal: number | null = null;
  precioBoleto: number = 12; 
  boletosPorComprador: number = 7; 

  calcularPrecio(): void {

    const maxBoletos = this.compradores * this.boletosPorComprador;

    if (this.boletos > maxBoletos) {
      alert(`No puedes comprar más de ${maxBoletos} boletos por ${this.compradores} comprador.`);
      return;
    }

    let descuento = 0;

    if (this.boletos >= 3 && this.boletos <= 5) {
      descuento = 0.10; 
    } else if (this.boletos >= 6) {
      descuento = 0.15; 
    }

    let precioConDescuento = this.boletos * this.precioBoleto * (1 - descuento);

    if (this.usaCineco) {
      precioConDescuento *= 0.90; 
    }

    this.precioTotal = precioConDescuento;
  }

}