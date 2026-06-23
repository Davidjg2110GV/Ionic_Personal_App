import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.page.html',
  styleUrls: ['./informacion-personal.page.scss'],
  standalone: false,
})
export class InformacionPersonalPage implements OnInit {

  // Datos personales agrupados en un objeto para facilitar su uso en el template
  misDatos = {
    nombre: 'David Jesus Gonzalez Villegas',
    cedula: 'V-30.085.011',
    carrera: 'Ingeniería en Sistemas',
    universidad: 'Universidad Nacional Experimental de las Telecomunicaciones e Informática (UNETI)',
    fotoUrl: 'assets/profile.jpg'
  };

  // Resumen profesional como string independiente
  resumenProfesional: string = 'Estudiante de Ingeniería en Sistemas, apasionado por el desarrollo de aplicaciones móviles y soluciones tecnológicas innovadoras. Con conocimientos en frameworks modernos y metodologías ágiles de desarrollo de software.';

  // Historial educativo como arreglo de objetos para iterar con *ngFor
  educacion = [
    {
      titulo: 'Ingeniería en Sistemas',
      institucion: 'UNETI',
      periodo: '2023 - Presente',
      nota: 'En curso'
    },
    {
      titulo: 'Bachiller en Ciencias',
      institucion: 'U.E.N. Benito Canónico',
      periodo: '2015 - 2020',
      nota: 'Graduado'
    }
  ];

  // Experiencia profesional estructurada de la misma forma
  experiencia = [
    {
      cargo: 'Técnico de hardware y soporte operativo',
      empresa: 'Canguro Venezuela C.A.',
      periodo: '2023 - 2024',
      descripcion: 'Instalación de software, solución de fallas de hardware, mantenimiento preventivo y correctivo de equipos informáticos.'
    },
    {
      cargo: 'Desarrollador Junior',
      empresa: 'Canguro Venezuela C.A.',
      periodo: '2025 - Presente',
      descripcion: 'Desarrollo soluciones informaticas con Python, PostgreSQL y OpenERP(Odoo).'
    }
  ];

  // Habilidades con nombre y nivel para renderizar como chips avanzados
  habilidades = [
    { nombre: 'Ionic & Angular', nivel: 'Junior' },
    { nombre: 'TypeScript', nivel: 'Junior' },
    { nombre: 'HTML / CSS', nivel: 'Junior' },
    { nombre: 'Python', nivel: 'Junior' },
    { nombre: 'Git & GitHub', nivel: 'Junior' },
    { nombre: 'Bases de Datos', nivel: 'Junior' },
    { nombre: 'Gestión de Proyectos', nivel: 'Junior' },
    { nombre: 'Soporte Técnico', nivel: 'Junior' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
