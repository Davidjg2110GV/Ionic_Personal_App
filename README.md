# Desarrollo de Interfaz Móvil con Enrutamiento Múltiple (Ionic Framework)

**Institución:** Universidad Nacional Experimental de las Telecomunicaciones e Informática (UNETI)  
**Programa Académico:** Ingeniería en Sistemas  
**Autor:** David Jesus Gonzalez Villegas (V-30.085.011)  
**Módulo/Asignatura:** Programación de Dispositivos Móviles

---

## 📌 Descripción del Proyecto

El presente repositorio contiene el código fuente de una aplicación móvil desarrollada como parte de la evaluación práctica del **Ejercicio 1**. El propósito fundamental de este proyecto es la implementación de una interfaz gráfica de usuario (GUI) estructurada mediante el framework **Ionic** y **Angular**, aplicando el patrón de diseño de navegación lateral interactiva (*Side Menu*).

Este desarrollo evidencia la correcta separación de responsabilidades (Modelo-Vista-Controlador) y la gestión de rutas internas, proporcionando una experiencia de usuario (UX) fluida y adaptativa a diferentes dimensiones de pantalla (Responsive Design).

## ⚙️ Estructura del Módulo y Componentes

La arquitectura del proyecto se fundamenta en un sistema modular compuesto por tres (3) vistas o interfaces principales, coordinadas a través de un enrutador central (`app-routing.module.ts`):

1. **Módulo de Inicio (`/inicio`):**
   Constituye el punto de entrada a la aplicación. Integra lógica mediante TypeScript para la captura, procesamiento y renderización dinámica de la fecha actual del sistema, demostrando la capacidad de enlace de datos de una sola vía (*One-Way Data Binding*).

2. **Módulo de Información Personal (`/informacion-personal`):**
   Interfaz destinada a la presentación de la identidad académica del estudiante. Los datos son gestionados a través de un objeto estructurado en el controlador (TypeScript) e inyectados en la plantilla HTML mediante interpolación. Esto simula el consumo y presentación de datos estructurados, facilitando una potencial y futura integración con bases de datos o APIs.

3. **Módulo de Contacto (`/contacto`):**
   Implementa un formulario interactivo que utiliza directivas de enlace de datos bidireccional (`ngModel`). Incorpora un método asíncrono para la validación lógica de los campos (Asunto y Mensaje), emitiendo notificaciones visuales temporales (*Toast Notifications*) para garantizar una correcta retroalimentación al usuario tras sus interacciones.

## 🛠️ Tecnologías Empleadas

*   **Framework Principal:** Ionic Framework v7+
*   **Motor Lógico:** Angular y TypeScript
*   **Maquetación y Estilos:** HTML5 y SCSS
*   **Gestor de Dependencias:** Node Package Manager (NPM)

## 🚀 Instrucciones de Ejecución Local

Para compilar y ejecutar este proyecto en un entorno de desarrollo local, se requieren los siguientes pasos técnicos en la terminal:

```bash
# 1. Clonar el repositorio
git clone https://github.com/Davidjg2110GV/Ionic_Personal_App.git

# 2. Acceder al directorio raíz del proyecto
cd Ionic_Personal_App

# 3. Instalar las dependencias necesarias
npm install

# 4. Desplegar el servidor de desarrollo
ionic serve
```

---
*Nota: Este proyecto fue elaborado bajo fines estrictamente académicos para demostrar competencias en el desarrollo Frontend de aplicaciones móviles híbridas.*
