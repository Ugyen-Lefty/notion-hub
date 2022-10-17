import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

  dzongkhags = ['Bumthang', 'Chhukha', 'Dagana', 'Gasa', 'Haa', 'Lhuentse', 'Monggar', 'Paro', 'Pema Gatshel', 'Punakha', 'Samdrup Jongkhar', 'Samtse', 'Sarpang', 'Tashi Yangtse', 'Thimphu', 'Trashigang', 'Trongsa', 'Tsirang', 'Wangdue Phodrang', 'Zhemgang'];
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.signupForm = this.fb.group({
      profile_attributes: this.fb.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        dzongkhag: ['', Validators.required],
        gender: ['', Validators.required],
        phone: ['', Validators.required],
        role: ['innovator', Validators.required],
      }),
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    })
  }

  signUp() {
    this.authService.signUp(this.signupForm.value).subscribe( () => {
      Swal.fire('Signed Up successfully!', '', 'success').then(() => {
        //Redirect to dashboard.
     });
    });
  }

}
