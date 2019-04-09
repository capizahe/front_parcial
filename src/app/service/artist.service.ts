import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../artist';
import { environment } from 'src/environments/environment';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private httpClient:HttpClient) { }
  
  setDefaultData():Observable<any>{
    return this.httpClient.get(environment.setDefaultData);
  }
                                      
  getAllArtists():Observable<Artist[]>{
    return this.httpClient.get<Artist[]>(environment.getAllArtists);
  }
  getArtistById(id:number):Observable<Artist>{
    return this.httpClient.get<Artist>(environment.getArtistById);
  }
  addNewArtist(artist: Artist){
     console.log("artista a insertar" , artist);
    const body =  new HttpParams().set('name',artist.name).set('description',artist.description).set('category',(artist.category+""));
     return this.httpClient.post(environment.addArtist,body).subscribe();
  }

  addNewUser(usuario: Usuario){
    console.log("artista a insertar" , usuario);
   const body =  new HttpParams().set('name',usuario.name).set('password',usuario.password).set('username',usuario.username);
    return this.httpClient.post(environment.addUser,body).subscribe();
 }
}
