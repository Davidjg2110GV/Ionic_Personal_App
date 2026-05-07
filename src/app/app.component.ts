import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  // Configuro las páginas de mi aplicación en un arreglo centralizado.
  // Utilizo esta estrategia para poder mantener la lista de menús organizada; 
  // si más adelante necesito añadir otra sección, solo tendré que modificar este arreglo 
  // y el HTML se actualizará automáticamente gracias al *ngFor.
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Información Personal', url: '/informacion-personal', icon: 'person' },
    { title: 'Contacto', url: '/contacto', icon: 'mail' },
  ];

  constructor() {}
}
