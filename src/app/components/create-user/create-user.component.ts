import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  usuario: Usuario;

  constructor() {
    this.usuario= new Usuario();
   }

  ngOnInit() {
  }

}
