import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllArtistsComponent } from './components/all-artists/all-artists.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateArtistComponent } from './components/create-artist/create-artist.component';
import { LoginComponent } from './components/login/login.component';
import { DetalleArtistaComponent } from './components/detalle-artista/detalle-artista.component';

const routes: Routes = [
{path:'', redirectTo: '/login', pathMatch:'full'},
{path:'all-artists',component : AllArtistsComponent},
{path:'add-user',component : CreateUserComponent},
{path:'add-artist',component : CreateArtistComponent},
{path:'login',component : LoginComponent},
{path:'artistid/:id',component : DetalleArtistaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
