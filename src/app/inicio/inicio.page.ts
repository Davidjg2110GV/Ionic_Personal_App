import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {

  // Variable para mostrar la fecha actual en el Hero Section
  fechaActual: string = '';

  // Saludo dinámico según la hora del dispositivo
  saludo: string = '';

  constructor() { }

  ngOnInit() {
    // Formateo la fecha en español usando toLocaleDateString()
    this.fechaActual = new Date().toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Personalizo el saludo según la hora actual del sistema
    const hora = new Date().getHours();
    if (hora < 12) {
      this.saludo = 'Buenos días';
    } else if (hora < 18) {
      this.saludo = 'Buenas tardes';
    } else {
      this.saludo = 'Buenas noches';
    }
  }
}
