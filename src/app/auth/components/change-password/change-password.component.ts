import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ProgressBarService } from 'src/app/shared/service/progress-bar.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  model: any = {};

  constructor(private route: ActivatedRoute, private authService: AuthService, 
    public progressBar: ProgressBarService, private toastr:ToastrService) { }

  ngOnInit() {
    this.model.token = this.route.snapshot.queryParamMap.get('token');
    this.model.userid = this.route.snapshot.queryParamMap.get('userid');
  }

  changePassword() {
    let infoToast = this.toastr.info('Working on changing password');
    this.progressBar.startLoading();
    this.authService.ChangePassword(this.model).subscribe(() => {
      this.progressBar.setSuccess();
      this.toastr.success('Password changed to ' +"'"+ this.model.password+"'", 'Your password changed successfully')
      this.toastr.remove(infoToast.toastId);
      this.progressBar.completeLoading();
    }, error => {
      this.progressBar.setError();
      console.log(error);
      this.toastr.error('Unable to change password', 'Can\'t change your password')
      this.toastr.remove(infoToast.toastId);
      this.progressBar.completeLoading();
    })
  }
}
