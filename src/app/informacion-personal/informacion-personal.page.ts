import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.page.html',
  styleUrls: ['./informacion-personal.page.scss'],
  standalone: false,
})
export class InformacionPersonalPage implements OnInit {

  // Construí un objeto para agrupar mis datos personales.
  // Prefiero estructurar la información en un objeto en lugar de usar variables sueltas
  // porque me permite mantener el código ordenado y facilita la futura integración con una API
  // en caso de que esta información necesite venir de una base de datos.
  misDatos = {
    nombre: 'David Jesus Gonzalez Villegas', // Sustituye por tu nombre
    cedula: 'V-30.085.011',          // Sustituye por tu cédula
    carrera: 'Ingeniería en Sistemas', // Sustituye por tu carrera
    universidad: 'Universidad Nacional Experimental de las Telecomunicaciones e Informática (UNETI)'
  };

  constructor() { }

  ngOnInit() {
  }
}
