import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaListaComponent } from './categorias/categoria/categoria-lista/categoria-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    CategoriaListaComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
