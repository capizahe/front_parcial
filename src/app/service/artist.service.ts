import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../artist';
import { environment } from 'src/environments/environment';
import { Usuario } from '../usuario';
import {Comment} from '../comment';

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

  addComment(comment: Comment){
    console.log("comentario insertado: ", comment);
    const body = new HttpParams().set('artist', (comment.id_artist+"")).set('comment', comment.comment).set('usuario', (comment.usuario+""));
    return this.httpClient.post(environment.addComment, body).subscribe();

  }
  getAllComments(id_usuario: number):Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(environment.getAllCommentsById+'/'+id_usuario);
  }


  


  addNewUser(usuario: Usuario){
    console.log("artista a insertar" , usuario);
   const body =  new HttpParams().set('name',usuario.name).set('password',usuario.password).set('username',usuario.username);
    return this.httpClient.post(environment.addUser,body).subscribe();
 }
}
