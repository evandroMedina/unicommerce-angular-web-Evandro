import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { CategoriaListComponent } from './categorias/categoria-list/categoria-list.component';
import { CategoriaListResolver } from './categorias/categoria-list/categoria-list.resolver';
import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { ClienteListResolver } from './clientes/cliente-list/cliente-list.resolver';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoListResolver } from './produtos/produto-list/produto-list.resolver';
import { SignInComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignupComponent } from './home/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { UsuarioListResolver } from './usuarios/usuario-list/usuario-list.resolver';
import { MenuComponent } from './core/menu/menu.component';

const routes: Routes = [

    {
        path: '', // locallhost:4200/
        component: HomeComponent,
        canActivate: [AuthGuard], // se estiver logado já vai para a lista de produtos
        children: [
            {
                path: '', // locallhost:4200/
                component: SignInComponent,
            },
        
            {
                path: 'signup', 
                component: SignupComponent,
            },
 
        ]
    },

    {
        path: 'menu', 
        component: MenuComponent,
    },

    { 
        path: 'categoria', 
        component: CategoriaFormComponent
    },
    { 
        path: 'categoria/lista', 
        component: CategoriaListComponent,
        resolve: {
            categorias: CategoriaListResolver
        } 
    },
    { 
        path: 'cliente', 
        component: ClienteFormComponent
    },
    { 
        path: 'cliente/lista', 
        component: ClienteListComponent,
        resolve: {
            clientes: ClienteListResolver
        } 
    },
    { 
        path: 'produto', 
        component: ProdutoFormComponent
    },
    { 
        path: 'produto/lista', 
        component: ProdutoListComponent,
        resolve: {
            produtos: ProdutoListResolver
        } 
    },
    { 
        path: 'usuario/lista', 
        component: UsuarioListComponent,
        canActivate: [AuthGuard],  
        resolve: {
            usuarios: UsuarioListResolver
        }
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    },

];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

