import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bases',
  templateUrl: './operas-bases.component.html',
  styleUrl: './operas-bases.component.css'
})
export class OperasBasesComponent {

  num1 = ''
  num2 = ''

  resultado:number = 0; 

  sumar(){
    this.resultado= parseInt(this.num1) + parseInt(this.num2)
  }
}
