import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostDetailService } from '../shared/service/post-detail.service';
import { ProgressBarService } from '../shared/service/progress-bar.service';
import { PostDetail } from './post-detail.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styles: [
  ]
})
export class PostDetailsComponent implements OnInit {

  constructor(public service: PostDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedPost:PostDetail){
    this.service.formData = Object.assign({}, selectedPost);
    window.location.hash = '#edit';
  }

  onDelete(id:number){
    if(confirm("Are you sure you want delete this post")){
      this.service.deletePostDetail(id)
      .subscribe(
        res => {
          this.service.refreshList();
          this.toastr.error("Deleted Successfuly", "Your Post")
        },
        err => 
        { 
          console.log(err); 
        }
      )
    }
  }

}
