import {HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import {Injectable, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from "rxjs/Observable";
import {observable} from "rxjs/symbol/observable";

@Injectable()
export class MethodService implements OnInit {
  constructor( public http: HttpClient, public routeServe: Router) {}
  private datas: object[];
  private add: string;
  public readeddata: any;
  tie: object;
  rrr: string;
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  goAddress(address:string, id:string) {
    this.routeServe.navigate([address,id]);
  }
  routeTo(adress:string) {
    this.routeServe.navigate([adress]);
  }
  postData(body: object):any {
    return this.http.post("../assets/package.json", body );
  }
  xiugai(body: object): any {
    return this.http.post('./assets/package.json', body, {params: new HttpParams().set('id','3')});
  }
  addTie(poName:string, poThing:string, id:number):Promise<any> {
    this.tie= {poName:poName,poThing:poThing,poUserId:id};
    return this.http.post("/post_bar/postthing/addPostthing",JSON.stringify(this.tie), {headers:this.headers})
      .toPromise().then(data => this.readeddata = data);
  }
  saveUser(userName:string,userPassword:string): Promise<any> {
    this.tie= {userName:userName,userPassword:userPassword};
    return this.http.post("/post_bar/user/saveUser", JSON.stringify(this.tie),{headers:this.headers})
      .toPromise();
  }
  login(userName:string,userPassword:string): Promise<any> {
    this.tie= {userName:userName,userPassword:userPassword};
    return this.http.post("/post_bar/user/login", JSON.stringify(this.tie),{headers:this.headers})
      .toPromise();
  }
  updatePassword(id:number,userPassword:string):Promise<any> {
    this.tie={id:id,userPassword:userPassword};
    return this.http.post("/post_bar/user/updatePassword",JSON.stringify(this.tie),{headers:this.headers}).toPromise();
  }
  ngOnInit() {
  }
}
