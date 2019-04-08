import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';
import { ArtistService } from 'src/app/service/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  usuario: Usuario;

  constructor(private userService: ArtistService,private router:Router) {
    this.usuario= new Usuario();
   }

  ngOnInit() {
  }

  addAUser(){
    this.userService.addNewUser(this.usuario);
    this.router.navigateByUrl('/all-artists');

  }

}
