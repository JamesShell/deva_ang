import { Component, OnInit } from '@angular/core';
import { PostDetailService } from 'src/app/shared/service/post-detail.service';
import { ActivatedRoute } from "@angular/router";
import { PostDetail } from '../post-detail.model';
import { ToastrService } from 'ngx-toastr';
import { ProgressBarService } from 'src/app/shared/service/progress-bar.service';

@Component({
  selector: 'app-post-detail-page',
  templateUrl: './post-detail-page.component.html',
  styleUrls: [

  ]
})
export class PostDetailPageComponent implements OnInit {

  constructor(private service: PostDetailService, private route:ActivatedRoute, 
    public progressBar: ProgressBarService, private toastr:ToastrService) { }

  post:PostDetail = new PostDetail();

  ngOnInit() {
    this.post.postId = Number(this.route.snapshot.params['id']); 
    
    let toast = this.toastr.info('Loading Post')
    this.progressBar.startLoading();
    this.service.getPostDetail(this.post.postId)
    .subscribe(
      res => 
      {
        this.toastr.remove(toast.toastId);
        this.post = res as PostDetail;
        this.progressBar.setSuccess();
        this.progressBar.completeLoading();
      },
      err => 
      { 
        this.toastr.remove(toast.toastId);
        console.log(err);
        this.progressBar.setError();
        this.progressBar.completeLoading();
      }
    )
  }

}
