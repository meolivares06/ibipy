import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm?: any;

  constructor(private fb: FormBuilder,
              private authService : AuthService,
              private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

      // Call the authentication service's login method
      if (this.authService.login(username, password)) {
        // Navigate to the ProductListComponent upon successful login
        this.router.navigate(['']);
      } else {
        // Handle authentication error (show error message, etc.)
      }

    }
  }
}
