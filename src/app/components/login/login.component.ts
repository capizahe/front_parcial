import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public user: string;
   public password: string;

  constructor( private router:Router) { }

  check(){
    console.log("user",this.user);
    console.log('password', this.password);
    this.router.navigateByUrl('/all-artists');

  }

  ngOnInit() {
  }

}
