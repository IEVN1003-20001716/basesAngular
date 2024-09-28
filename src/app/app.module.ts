import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { OperasBasesComponent } from './formularios/operas-bases/operas-bases.component';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { CinepolisAngularComponent } from './formularios/cinepolis-angular/cinepolis-angular.component';
import { ActividadResistenciaComponent } from './formularios/actividad-resistencia/actividad-resistencia.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFilterPipe,
    OperasBasesComponent,
    Ejemplo1Component,
    CinepolisAngularComponent,
    ActividadResistenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
