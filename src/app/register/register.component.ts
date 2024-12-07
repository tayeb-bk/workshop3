import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  registerForm = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3),Validators.pattern("[a-zA-Z]+$")]),
    email : new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
    password : new FormControl('',Validators.required),
});
onSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.registerForm.value);
}
}
