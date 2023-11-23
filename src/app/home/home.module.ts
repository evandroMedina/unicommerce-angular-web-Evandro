import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [ 
        SignInComponent,
        SignupComponent,
        HomeComponent 
    ],

    imports: [ 
        CommonModule, 
        FormsModule,
        ReactiveFormsModule, 
        VMessageModule,
        RouterModule 
    ]
})
export class HomeModule { }