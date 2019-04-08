import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../artist';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private httpClient:HttpClient) { }


  
  getAllArtists():Observable<Artist[]>{
    return this.httpClient.get<Artist[]>(environment.getAllArtists);
  }
  getArtistById(id:number):Observable<Artist>{
    return this.httpClient.get<Artist>(environment.getArtistById);
  }
}
