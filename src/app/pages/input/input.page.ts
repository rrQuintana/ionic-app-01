import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required, Validators.minLength(4)],
      apellido: ['', Validators.required],
      edad: [, Validators.required],
      tipoSangre: ['', Validators.required],
    });
  }

  registrar() {
    if (this.registerForm.invalid) {
      console.log(this.registerForm.value);
      return;
    }
      console.log('Formulario inválido');
    
  }
}
