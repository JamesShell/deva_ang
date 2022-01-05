import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ProgressBarService } from 'src/app/shared/service/progress-bar.service';
import { payments, PaymentType } from './paymentTypes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, public progressBar: ProgressBarService,
    private toastr:ToastrService, private route:ActivatedRoute) { }

  payment:PaymentType = new PaymentType();

  ngOnInit(): void {
    var paymentId = this.route.snapshot.params['payment-type'];
    this.payment = payments.find(p => p.id === paymentId) || new PaymentType();
  }

  onSubmit(f: NgForm) {
    let infoToast = this.toastr.info('Working on creating new account');
    this.progressBar.startLoading();
    this.authService.Register(f.value).subscribe(
      x => {
        console.log('User created');
        this.toastr.success('Account created', 'Registered Successfully')
        this.toastr.remove(infoToast.toastId);
        this.progressBar.setSuccess();
        this.progressBar.completeLoading();
      },
      err => {
        console.log(err);
        this.toastr.error(err.error.errors[0].description, 'Register Failed')
        this.toastr.remove(infoToast.toastId);
        this.progressBar.completeLoading();
        this.progressBar.setError();
      }
    );
  }

}
