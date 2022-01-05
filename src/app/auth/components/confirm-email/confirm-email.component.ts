import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ProgressBarService } from 'src/app/shared/service/progress-bar.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  emailConfirmed: boolean = false;
  urlParams: any = {};

  constructor(private authService: AuthService, private route: ActivatedRoute, 
    public progressBar: ProgressBarService, private toastr:ToastrService) { }
  
  ngOnInit() {
    this.urlParams.token = this.route.snapshot.queryParamMap.get('token');
    this.urlParams.userId = this.route.snapshot.queryParamMap.get('userid');

    this.ConfirmEmail();
  }

  ConfirmEmail(){
    let toast = this.toastr.info('Checking Token')
    this.progressBar.startLoading();
    this.authService.ConfirmEmail(this.urlParams).subscribe(() => {
      this.toastr.success('Your account now is verified', 'Email Confirmation')
      this.toastr.remove(toast.toastId);
      this.progressBar.setSuccess();
      this.emailConfirmed = true;
      this.progressBar.completeLoading();
    }, error => {
      console.log(error);
      this.toastr.error('Unable to Confirm Your Email', 'Email Confirmation')
      this.toastr.remove(toast.toastId);
      this.progressBar.setError();
      this.emailConfirmed = false;
      this.progressBar.completeLoading();
    })
  }

}
