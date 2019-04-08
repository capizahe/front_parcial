import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { AllArtistsComponent } from './components/all-artists/all-artists.component';
import { CreateArtistComponent } from './components/create-artist/create-artist.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

//Angular Material
import {MatInputModule, MatButtonModule,MatSelectModule,MatIconModule,MatCardModule,MatToolbarModule, MatDatepickerModule, MatNativeDateModule, MatSidenavModule } from '@angular/material';
import { FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { DetalleArtistaComponent } from './components/detalle-artista/detalle-artista.component';
import { CommentComponent } from './components/comment/comment.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArtistsComponent,
    AllArtistsComponent,
    CreateArtistComponent,
    CreateUserComponent,
    DetalleArtistaComponent,
    CommentComponent,
    AllCommentsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule ,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
     MatDatepickerModule,
     MatNativeDateModule,
     FormsModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
