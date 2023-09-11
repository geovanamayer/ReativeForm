import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm!: FormGroup;
  
  constructor(){
  }
  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
    });
  }
  
  get name() {
    return this.userForm.get('name')!;
  }

  get email() {
    return this.userForm.get('email')!;
  }

  submit(){
    if (this.userForm.valid) {
      console.log("Formulário válido", this.userForm.value);
      this.userForm.reset();
    }else{
      console.log("Formulário inválido");
      return;
    }
  }
}
