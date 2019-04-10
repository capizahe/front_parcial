import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) {}

  autenticacion(username:string, password:string):Observable<Usuario>{
    return null;
  }

}
