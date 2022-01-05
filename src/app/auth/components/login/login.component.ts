import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ProgressBarService } from 'src/app/shared/service/progress-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public progressBar: ProgressBarService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    let infoToast = this.toastr.info('Checking User Info');
    this.progressBar.startLoading();
    this.authService.Login(f.value).subscribe(
      x => {
        this.toastr.success('User logged in', 'Logged Successfully');
        this.toastr.remove(infoToast.toastId);
        this.progressBar.setSuccess();
        this.progressBar.completeLoading();
      },
      err => {
        this.toastr.error('Unable to login', 'Login Failed');
        this.toastr.remove(infoToast.toastId);
        console.log(err);
        this.progressBar.completeLoading();
        this.progressBar.setError();
      }
    );
  }

}
