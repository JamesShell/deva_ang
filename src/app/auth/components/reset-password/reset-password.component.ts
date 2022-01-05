import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ProgressBarService } from 'src/app/shared/service/progress-bar.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthService, public progressBar: ProgressBarService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    let infoToast = this.toastr.info('Working in sending email')
    this.progressBar.startLoading();
    this.authService.ResetPassword(f.value).subscribe(
      x => {
        this.toastr.success('Check your email to change your password', 'Password Reset');
        this.toastr.remove(infoToast.toastId);
        this.progressBar.setSuccess();
        this.progressBar.completeLoading();
      },
      err => {
        this.progressBar.setError();
        console.log(err);
        this.toastr.error('Unable to send email', 'Password Reset');
        this.toastr.remove(infoToast.toastId);
        this.progressBar.completeLoading();
      }
    );
  }

}
