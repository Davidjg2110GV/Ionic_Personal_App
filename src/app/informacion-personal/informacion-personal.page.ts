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
    nombre: 'David Jesus Gonzalez Villegas',
    cedula: 'V-30.085.011',
    carrera: 'Ingeniería en Sistemas',
    universidad: 'Universidad Nacional Experimental de las Telecomunicaciones e Informática (UNETI)',
    fotoUrl: 'https://i.ibb.co/ZzphLGyc/IMG-20251204-070842-288.jpg'
  };

  // Organicé mi resumen profesional como string separado para poder mostrarlo
  // en la tarjeta principal sin saturar el objeto de datos.
  resumenProfesional: string = 'Estudiante de Ingeniería en Sistemas, apasionado por el desarrollo de aplicaciones móviles y soluciones tecnológicas innovadoras. Con conocimientos en frameworks modernos y metodologías ágiles de desarrollo de software.';

  // Estructuré mi historial educativo como un arreglo de objetos.
  // Esto me permite iterar fácilmente con *ngFor en el template y agregar
  // más entradas en el futuro sin modificar la estructura HTML.
  educacion = [
    {
      titulo: 'Ingeniería en Sistemas',
      institucion: 'UNETI', //Universidad Nacional Experimental de las Telecomunicaciones e Informática
      periodo: '2023 - Presente',
      nota: 'En curso'
    },
    {
      titulo: 'Bachiller en Ciencias',
      institucion: 'U.E.N. Benito Canónico', //Unidad Educativa Nacional Benito Canónico
      periodo: '2015 - 2020',
      nota: 'Graduado'
    }
  ];

  // Hice lo mismo con la experiencia: un arreglo de objetos con estructura uniforme.
  // Decidí incluir tanto experiencia laboral como proyectos académicos relevantes 
  // para demostrar capacidad técnica.
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

  // Las habilidades las definí como un arreglo simple de strings.
  // En el template las renderizo como "chips" o etiquetas avanzadas, 
  // agrupando el nombre de la tecnología y el nivel de dominio en un solo objeto.
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
