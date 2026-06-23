# Portafolio Profesional Móvil — Ionic Framework

**Institución:** Universidad Nacional Experimental de las Telecomunicaciones e Informática (UNETI)  
**Programa Académico:** Ingeniería en Sistemas  
**Autor:** David Jesus Gonzalez Villegas (V-30.085.011)  
**Asignatura:** Programación de Dispositivos Móviles  
**Fecha:** Mayo 2026

---

## Descripción del Proyecto

Aplicación móvil de tipo portafolio profesional desarrollada como evaluación práctica del **Ejercicio 1**. El proyecto presenta una interfaz gráfica moderna que implementa principios de diseño UI/UX avanzados, navegación mediante pestañas (Tab Navigation) y diseño responsivo adaptativo para dispositivos móviles y computadoras de escritorio.

El desarrollo se realizó aplicando el patrón de arquitectura **Modelo-Vista-Controlador (MVC)** que proporciona Angular, separando la lógica de negocio (TypeScript) de la presentación visual (HTML/SCSS).

## Estructura de la Aplicación

La arquitectura se compone de tres módulos principales coordinados mediante un sistema de enrutamiento (`app-routing.module.ts`):

### 1. Módulo de Inicio (`/inicio`)
- Banner principal (Hero Section) con saludo dinámico según la hora del sistema.
- Tarjetas informativas con efecto Glassmorphism.
- Fila de estadísticas del proyecto con íconos representativos.
- Enlace de datos unidireccional (*One-Way Data Binding*) para la fecha y el saludo.

### 2. Módulo de Información Personal (`/informacion-personal`)
- Tarjeta de resumen profesional con foto de perfil.
- Historial educativo y experiencia profesional renderizados dinámicamente con `*ngFor`.
- Sección de habilidades técnicas con chips que muestran nombre y nivel de dominio.
- Grid de 2 columnas responsivo mediante CSS Grid y media queries.

### 3. Módulo de Contacto (`/contacto`)
- Hero de contacto con nombre del profesional.
- Botones de acción directa hacia LinkedIn, GitHub y correo electrónico.
- Protocolo `mailto:` con parámetros `subject` y `body` pre-configurados.
- Footer informativo con ubicación e institución.

## Tecnologías y Herramientas

| Tecnología | Propósito |
|---|---|
| Ionic Framework v7 | Componentes UI para aplicaciones híbridas |
| Angular 16 | Framework MVC para lógica y estructura |
| TypeScript | Lenguaje tipado para la lógica de negocio |
| HTML5 | Estructura semántica de las vistas |
| SCSS | Hojas de estilo con variables y anidamiento |
| Google Fonts | Tipografías: Inter, Playfair Display, Great Vibes |
| Git & GitHub | Control de versiones y repositorio remoto |

## Estándares y Principios de Diseño Aplicados

### Diseño Responsivo
- Uso de `ion-grid` con atributo `fixed` y columnas responsivas (`size`, `size-md`, `size-lg`).
- Restricción de `max-width: 800px` para evitar deformación en pantallas anchas.
- Media queries para adaptar layouts (1 columna en móvil, 2 columnas en desktop).
- Viewport configurado con `user-scalable=no` para comportamiento nativo en iOS/Android.

### Glassmorphism (UI Premium)
- Fondos con transparencia (`rgba(255, 255, 255, 0.96)`).
- Filtro de desenfoque (`backdrop-filter: blur(12px)`).
- Sombras difusas (`box-shadow`) con tonalidades de la paleta base.
- Bordes redondeados amplios (`border-radius: 20px`).

### Tipografía Jerárquica
- **Inter** (Sans-serif): cuerpo de texto, legibilidad en pantallas pequeñas.
- **Playfair Display** (Serif): encabezados de tarjetas, toque editorial.
- **Great Vibes** (Script): nombres propios, efecto de firma elegante.

### Paleta de Colores (Aurelian Tech Theme)
- Fondo principal: Oxford Navy profundo (`#051424`).
- Fondos de gradiente: `linear-gradient(180deg, #010f1f 0%, #051424 40%, #0d1c2d 100%)`.
- Acentos destacados: Oro Aureliano (`#e9c349`).
- Superficies y contenedores: Glassmorphism oscuro semitransparente con desenfoque (`rgba(18, 33, 49, 0.6)` + `backdrop-filter: blur(12px)`).
- Textos y títulos: Aurelian Silver-Blue (`#bec6e0` / `#d4e4fa`).

### Interacciones y Micro-animaciones (Optimizadas para Rendimiento y GPU)
- Hover con elevación (`translate3d(0, -4px, 0)`) y brillo dorado en bordes solo para dispositivos con ratón (`@media (hover: hover)`).
- Feedback táctil interactivo con `scale(0.98)` para mejor experiencia en móviles.
- Transiciones fluidas utilizando `cubic-bezier(0.25, 1, 0.5, 1)` con aceleración de hardware por GPU (usando `translate3d` y propiedades `will-change`).
- Aislamiento de renderizado mediante la propiedad `contain: strict` en animaciones continuas de fondo para minimizar el uso de memoria RAM en servidores en la nube como Vercel.

## Uso Responsable de Inteligencia Artificial

Durante el desarrollo de este proyecto se utilizó **Inteligencia Artificial generativa** como herramienta de asistencia técnica. Su uso fue estrictamente supervisado y controlado, aplicándose bajo los siguientes principios:

1. **Asistencia, no sustitución:** La IA se empleó para consultar buenas prácticas de diseño responsivo, optimización de CSS y resolución de errores de compilación. Todas las decisiones de diseño y arquitectura fueron tomadas por el estudiante.

2. **Comprensión obligatoria:** Cada fragmento de código sugerido por la IA fue analizado, comprendido y adaptado antes de ser incorporado al proyecto. No se incluyó código sin entender su funcionamiento.

3. **Iteración controlada:** El proceso fue iterativo: el estudiante planteaba requerimientos específicos, evaluaba los resultados en el navegador, y solicitaba ajustes puntuales según los estándares definidos.

4. **Documentación del proceso:** Los comentarios en el código fuente reflejan la comprensión del estudiante sobre las tecnologías utilizadas, no son generados automáticamente.

## Instrucciones de Ejecución

```bash
# Clonar el repositorio
git clone https://github.com/Davidjg2110GV/Ionic_Personal_App.git

# Acceder al directorio del proyecto
cd Ionic_Personal_App

# Instalar dependencias
npm install

# Ejecutar el servidor de desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:4200/`.

## Referencias Bibliográficas

- Griffith, C. (2019). *Mobile App Development with Ionic: Cross-Platform Apps with Ionic, Angular, and Cordova* (2da ed.). O'Reilly Media.

- Angular Team. (2024). *Angular Documentation* [Documentación oficial]. Google. https://angular.io/docs

- Ionic Team. (2024). *Ionic Framework Documentation* [Documentación oficial]. Ionic. https://ionicframework.com/docs

- Mozilla Developer Network. (2024). *CSS: Cascading Style Sheets* [Documentación técnica]. Mozilla. https://developer.mozilla.org/es/docs/Web/CSS

- Google Fonts. (2024). *Inter, Playfair Display, Great Vibes* [Tipografías web]. Google. https://fonts.google.com/

- World Wide Web Consortium. (2024). *CSS Flexible Box Layout Module Level 1*. W3C. https://www.w3.org/TR/css-flexbox-1/

- World Wide Web Consortium. (2024). *CSS Grid Layout Module Level 1*. W3C. https://www.w3.org/TR/css-grid-1/

- Nielsen, J. (2020). *10 Usability Heuristics for User Interface Design* [Artículo técnico]. Nielsen Norman Group. https://www.nngroup.com/articles/ten-usability-heuristics/

---

*Proyecto elaborado con fines académicos para demostrar competencias en el desarrollo Frontend de aplicaciones móviles híbridas. UNETI, 2026.*
