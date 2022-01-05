import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PostDetailService } from 'src/app/shared/service/post-detail.service';
import { ProgressBarService } from 'src/app/shared/service/progress-bar.service';
import { PostDetail } from '../post-detail.model';

@Component({
  selector: 'app-post-detail-form',
  templateUrl: './post-detail-form.component.html',
  styles: [
  ]
})
export class PostDetailFormComponent implements OnInit {

  constructor(public service:PostDetailService, private toastr:ToastrService,
    public progressBar: ProgressBarService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if(this.service.formData.postId == 0){
      this.insertRecord(f);
    } else {
      this.updateRecord(f);
    }
  }

  insertRecord(f: NgForm){
    this.progressBar.startLoading();
    this.service.postPostDetail().subscribe(
      res =>{
        this.service.refreshList();
        this.toastr.success('Submitted Succussfuly', 'Your Post');
        this.resetForm(f);
        this.progressBar.setSuccess();
        this.progressBar.completeLoading();
      },
      err => { 
        this.progressBar.setError();
        console.log(err);
        this.progressBar.completeLoading();
      }
    );
  }

  updateRecord(f: NgForm){
    this.progressBar.startLoading();
    this.service.putPostDetail().subscribe(
      res =>{
        this.toastr.info('Updated Succussfuly', 'Your Post');
        this.service.refreshList();
        this.resetForm(f);
        this.progressBar.setSuccess();
        this.progressBar.completeLoading();
      },
      err => { 
        this.progressBar.setError();
        console.log(err);
        this.progressBar.completeLoading();
      }
    );
  }

  resetForm(f: NgForm){
    f.form.reset();
    this.service.formData = new PostDetail();
  }

}