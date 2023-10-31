import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { CategoriaComponent } from "./categorias/categoria/categoria.component";
import { ClienteComponent } from "./cliente/cliente/cliente.component";
import { AppComponent } from "./app.component";


const routes: Routes = [
    { path: '', component: AppComponent},
    { path: 'categoria', component: CategoriaComponent }, //carega o componente categoria
    { path: 'cliente', component: ClienteComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{

}