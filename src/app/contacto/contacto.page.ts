import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: false,
})
export class ContactoPage implements OnInit {

  // Declaro este modelo de datos bidireccional (ngModel) para el formulario.
  // Lo estructuré así para poder capturar fácilmente lo que el usuario escribe en la interfaz
  // y luego procesarlo en la función de envío.
  formularioContacto = {
    asunto: '',
    mensaje: ''
  };

  // Inyecto ToastController para poder mostrar notificaciones en la pantalla.
  // Considero que un buen diseño UX debe informar al usuario si su acción tuvo éxito.
  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  // Implementé este método asíncrono para manejar la acción del botón enviar.
  // Decidí hacerlo asíncrono (async/await) porque el componente Toast de Ionic devuelve una promesa
  // y de esta forma el código es mucho más legible que encadenando .then()
  async enviarMensaje() {
    // Lógica básica de validación: me aseguro de que no me envíen campos vacíos
    if(this.formularioContacto.asunto.trim() === '' || this.formularioContacto.mensaje.trim() === '') {
      await this.mostrarNotificacion('Por favor completa todos los campos.', 'warning');
      return;
    }

    // Si todo está correcto, simulo el envío y limpio el formulario
    await this.mostrarNotificacion('¡Mensaje enviado correctamente!', 'success');
    
    // Reseteo mi modelo para dejar la interfaz limpia tras el envío exitoso
    this.formularioContacto = { asunto: '', mensaje: '' };
  }

  // Creé un método auxiliar reutilizable para generar las alertas visuales.
  // Esto me evita tener que reescribir la misma configuración del Toast varias veces.
  private async mostrarNotificacion(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2500,
      color: color,
      position: 'bottom'
    });
    await toast.present();
  }
}
