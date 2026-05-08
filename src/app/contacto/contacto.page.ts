import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: false,
})
export class ContactoPage implements OnInit {

  // Modelo del formulario con binding bidireccional (ngModel)
  formularioContacto = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  // Inyección de ToastController para notificaciones visuales
  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  // Método asíncrono para validar y procesar el envío del formulario
  async enviarMensaje() {
    const { nombre, email, asunto, mensaje } = this.formularioContacto;

    // Validación: todos los campos deben estar completos
    if (!nombre.trim() || !email.trim() || !asunto.trim() || !mensaje.trim()) {
      await this.mostrarNotificacion('Por favor completa todos los campos.', 'warning');
      return;
    }

    // Validación de formato de email con expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      await this.mostrarNotificacion('Por favor ingresa un email válido.', 'warning');
      return;
    }

    // Envío exitoso: notificación y reset del formulario
    await this.mostrarNotificacion('¡Mensaje enviado correctamente!', 'success');
    this.formularioContacto = { nombre: '', email: '', asunto: '', mensaje: '' };
  }

  // Método auxiliar para mostrar notificaciones Toast
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
