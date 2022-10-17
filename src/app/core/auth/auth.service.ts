import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  endPoints: any;

    constructor(private http: HttpClient){
       this.endPoints = 'https://notion-hub.fly.dev/';
    }

    signUp(data: any){
      return this.http.post(`${this.endPoints}users`, { user: data }, {withCredentials: true});
    }

    signIn(data: any){
      return this.http.post(`${this.endPoints}users/sign_in`, { user: data }, {withCredentials: true});
    }

}
