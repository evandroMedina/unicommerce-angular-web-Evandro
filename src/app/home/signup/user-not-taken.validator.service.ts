import { Injectable } from '@angular/core';
import { SignupService } from './signup.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, map, switchMap, first } from 'rxjs/operators'; 

@Injectable({ providedIn: 'root'})
export class UserNotTakenValidatorService {

    constructor(private signupService: SignupService){}

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control
            .valueChanges
            .pipe(debounceTime(300))
            .pipe(switchMap(login => 
                this.signupService.checkUserNameTaken(login)
            ))
            .pipe(map(isTaken => isTaken ? { loginTaken: true } : null ))
            .pipe(first());
        }
    }
}