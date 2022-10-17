import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  signInForm: any;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
      this.setForm();
  }

  setForm() {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      required: [false]
    })
  }

  userLogin() {
    this.authService.signIn(this.signInForm.value).subscribe( () => {
      Swal.fire({
        title: 'Login Successful!',
        timer: 1500,
        toast: true,
        showConfirmButton: false,
        icon: "success",
        position: 'top-end',
      }).then(() => {
        this.router.navigate(['app']);
      });
    }, error => {
      Swal.fire({
        title: 'Error Signing in',
        timer: 1500,
        toast: true,
        showConfirmButton: false,
        icon: "error",
        position: 'top-end',
      })
    })
  }
}
