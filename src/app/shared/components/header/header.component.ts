import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';
import { ProgressBarService } from '../../service/progress-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private progress: NgProgress, public progressBar: ProgressBarService,
    public authService: AuthService, private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.progressBar.progressRef = this.progress.ref('progressBar');
  }

  logout(){
    localStorage.removeItem('token');
    this.toastr.success('Logged Out Successfully', 'Logout');
  }

}
