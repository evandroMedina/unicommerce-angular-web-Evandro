import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaListaComponent } from './categorias/categoria/categoria-lista/categoria-lista.component';
import { ClienteComponent } from './cliente/cliente/cliente.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    CategoriaListaComponent,
    ClienteComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
