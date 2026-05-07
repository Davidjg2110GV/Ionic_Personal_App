import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {
  
  // Declaro una variable para almacenar la fecha de acceso actual.
  // La idea es mostrarle al usuario un mensaje de bienvenida personalizado con la fecha,
  // para darle un toque más dinámico a la pantalla principal.
  fechaActual: string = '';

  constructor() { }

  ngOnInit() {
    // Al inicializar el componente, configuro la fecha de hoy.
    // Decidí usar toLocaleDateString() para asegurarme de que el formato sea comprensible
    // y se adapte al idioma local de quien evalúe la app.
    this.fechaActual = new Date().toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
