import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;
  @ViewChild('inputLogin') inputLogin: ElementRef<HTMLInputElement>

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignupService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
    ) { }

  ngOnInit(): void {
    this.userNotTakenValidatorService.checkUserNameTaken();
    this.signupForm = this.formBuilder.group({
        login: ['', 
          [
            Validators.required,
           // Validators.email,
            Validators.minLength(2),
            Validators.maxLength(40),
            Validators.pattern(/^[a-z0-9_\-]+$/),
          ],
          this.userNotTakenValidatorService.checkUserNameTaken()
      ],
        senha: ['', 
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(14)
          ]
        ]
    })

    this.platformDetectorService.isPlatformBrowser() &&
    this.inputLogin.nativeElement.focus();
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService
      .signup(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
        );
  }

}
