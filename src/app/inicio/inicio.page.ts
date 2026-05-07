import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {

  // Almaceno la fecha actual formateada para mostrar un saludo dinámico.
  // La idea es que cada vez que el usuario abra la app, vea la fecha del día
  // lo que le da una sensación de contenido actualizado y profesional.
  fechaActual: string = '';

  // Almaceno la hora para personalizar el saludo (Buenos días / tardes / noches).
  // Esto demuestra que manejo lógica condicional en TypeScript basada en datos del sistema.
  saludo: string = '';

  constructor() { }

  ngOnInit() {
    // Formateo la fecha en español con formato completo para mayor legibilidad.
    this.fechaActual = new Date().toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Determino el saludo apropiado según la hora del día.
    // Esto personaliza la experiencia de usuario de forma sutil pero efectiva.
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
