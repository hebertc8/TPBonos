import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword = false;
  form: FormGroup;
  send = false;
  loading = false;

  constructor(private fb: FormBuilder, private router: Router, private Login: LoginService, private toastr: NbToastrService) {

    this.form = fb.group({
      user: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  login(valid) {

    this.loading = true;

    if (valid) {
      const input = this.form.value;
      const Logindata = {
        user: input.user,
        pass: input.password,

      };


      this.Login.login(Logindata).subscribe((res: any) => {

        if (res.message) {
          this.toastr.warning(res.message, 'Wrong');
        } else {
          this.Login.setUser(res);
          this.router.navigate(['/container/puntos']);
          setTimeout(() => {
            this.toastr.success('', 'Welcome');
          }, 1000);
        }

        this.loading = false;
      }, err => {
        this.loading = false;
      });
    } else {
      this.loading = false;
    }


    // this.router.navigate(['/container/main']);
  }
}
