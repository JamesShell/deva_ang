import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostDetail } from 'src/app/post-details/post-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PostDetailService {

  constructor(private http: HttpClient) { }

  formData : PostDetail = new PostDetail();
  list : PostDetail[];
  readonly baseURL = "http://localhost:5000/api/PostDetail"

  getPostDetail(id:number){
    return this.http.get(`${this.baseURL}/${id}`)
  }

  postPostDetail(){
    return this.http.post(this.baseURL, this.formData)
  }

  putPostDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.postId}`, this.formData)
  }

  deletePostDetail(id:number){
    return this.http.delete(`${this.baseURL}/${id}`)
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as PostDetail[])
  }
}
