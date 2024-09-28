import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actividad-resistencia',
  templateUrl: './actividad-resistencia.component.html',
  styleUrls: ['./actividad-resistencia.component.css']
})
export class ActividadResistenciaComponent {
  form: FormGroup;

  colors: string[] = ['Negro', 'Café', 'Naranja', 'Rojo',  'Amarillo', 'Verde', 'Azul', 'Morado', 'Gris', 'Blanco'];
  resistorValue: number = 0;
  maxValue: number = 0;
  minValue: number = 0;
  showResults: boolean = false;

  colorValues: { [key: string]: number } = {
    Negro: 0,
    Café: 1,
    Rojo: 2,
    Naranja: 3,
    Amarillo: 4,
    Verde: 5,
    Azul: 6,
    Morado: 7,
    Gris: 8,
    Blanco: 9
  };

  multipliers: { [key: string]: number } = {
    Negro: 1,
    Café: 10,
    Rojo: 100, 
    Naranja: 1000,
    Amarillo: 10000,
    Verde: 100000,
    Azul: 1000000,
    Morado: 10000000,
    Gris: 100000000,
    Blanco: 1000000000
  };

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      color1: ['', Validators.required],
      color2: ['', Validators.required],
      color3: ['', Validators.required],
      tolerance: [5, Validators.required]
    });
  }

  calculate() {
    const value1 = this.colorValues[this.form.get('color1')?.value];
    const value2 = this.colorValues[this.form.get('color2')?.value];
    const multiplier = this.multipliers[this.form.get('color3')?.value];
    const tolerance = this.form.get('tolerance')?.value;

    const resistanceValue = ((value1 * 10) + value2) * multiplier;
    this.resistorValue = resistanceValue;

    const tolerancePercentage = tolerance / 100;
    this.maxValue = resistanceValue * (1 + tolerancePercentage);
    this.minValue = resistanceValue * (1 - tolerancePercentage);

    this.showResults = true;
  }

  getColorStyle(color: string) {
    switch (color) {
      case 'Negro': return '#000000';
      case 'Café': return '#8B4513';
      case 'Rojo': return '#FF0000';
      case 'Naranja': return '#FFA500';
      case 'Amarillo': return '#FFFF00';
      case 'Verde': return '#008000';
      case 'Azul': return '#0000FF';
      case 'Morado': return '#800080';
      case 'Gris': return '#808080';
      case 'Blanco': return '#FFFFFF';
      default: return '';
    }
  }
}
