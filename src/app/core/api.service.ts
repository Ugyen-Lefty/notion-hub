import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ep: string;

  constructor(private http: HttpClient) {
    this.ep = 'https://notion-hub.fly.dev/';
   }

  askQuestion(data: any) {
    return this.http.post(`${this.ep}contents`, { content: data }, {withCredentials: true});
  }

  createProposal(data: any) {
    return this.http.post(`${this.ep}proposals`, { proposal: data }, {withCredentials: true});
  }

  getPopularForums() {
    return this.http.get(`${this.ep}trending/forum`, {withCredentials: true});
  }

  getAllUsers() {
    return this.http.get(`${this.ep}all_users`, {withCredentials: true});
  }

  getForums() {
    return this.http.get(`${this.ep}contents`, {withCredentials: true});
  }

  getProposalById(id: any) {
    return this.http.get(`${this.ep}proposals/${id}`, {withCredentials: true});
  }

  uploadImage(image: any){
    const data = new FormData();
    data.append('file', image);
    return this.http.post(`${this.ep}attachments`, data, {withCredentials: true});
  }

  getContentById(id: any) {
    return this.http.get(`${this.ep}contents/${id}`, {withCredentials: true});
  }

  addComment(value: any, id: any) {
   const comment = {
    commentable_id: id,
    commentable_type: 'Content',
    thoughts: value
   }
   return this.http.post(`${this.ep}comments`, {comment}, {withCredentials: true});
  }

  getProposal() {
    return this.http.get(`${this.ep}proposals`, {withCredentials: true});
  }

  getComments(id: any){
    return this.http.get(`${this.ep}contents/${id}/comments`, {withCredentials: true});
    }

    likePost(id: any) {
      return this.http.get(`${this.ep}interactions/${id}/like`, {withCredentials: true});
    }

    disLikePost(id: any) {
      return this.http.get(`${this.ep}interactions/${id}/dislike`, {withCredentials: true});
    }

    deletePost(id: any){
      return this.http.delete(`${this.ep}contents/${id}`, {withCredentials: true});
    }

    getCurrentUser(){
      return this.http.get(`${this.ep}current_user`, {withCredentials: true});
    }

    getIdeaTree(id: any){
      return this.http.get(`${this.ep}contents/${id}/idea_tree`, { withCredentials: true });
    }

    getConsent(id: any){
      return this.http.get(`${this.ep}contents/${id}/grant_consent`, {withCredentials: true});
    }

    signOut() {
      return this.http.delete(`${this.ep}users/sign_out`, {withCredentials: true});
    }

    filterForum(value: any) {
      if (value.type === 'dzongkhag') {
        return this.http.get(`${this.ep}filter_dzongkhag/${value.name}`, { withCredentials: true });
      } else if (value.type === 'category') {
        return this.http.get(`${this.ep}filter_category/${value.name}`, { withCredentials: true });
      } else {
        return this.http.get(`${this.ep}filter_visibility/${value.name}`, { withCredentials: true });
      }
    }

    getCategories(val: boolean) {
      return this.http.get(`${this.ep}trending/categories?content_type=${val? 'feed': 'forum'}`, {withCredentials: true});

    }

    webDiscussion() {
      return this.http.get(`${this.ep}website/popular_discussions`);
    }
}
