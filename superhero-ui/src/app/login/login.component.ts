import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string | undefined;
    error: string | undefined;
    success: string | undefined

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    )
    {
        //redirect to home if already logged in
       if (this.authenticationService.currentUserValue) {
           this.router.navigate(['/']);
       }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            Username: ['', Validators.required],
            Password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        // show success message on registration
        if (this.route.snapshot.queryParams['registered']) {
            this.success = 'Registration successful';
        }
    }

    // convenience getter for easy access to form fields
    get g() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.error = "";
        this.success = "";

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.loginForm.value)
            .subscribe((token) => {
              console.log(token);
              this.router.navigate(['/navbar']);
              this.loading = false;
            });
}
}
