import {Component, OnInit} from "@angular/core";
import {MethodService} from "./method.service";
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component(
  {
    selector:'app-info',
    templateUrl:'./info.component.html',
    styleUrls:['./info.component.css']
  }
)
export class InfoComponent implements OnInit {
  title:string;
  i:number;
  constructor(private M:MethodService, private acroute:ActivatedRoute){}
  go() {
    this.M.goAddress('/perinfog','sss');
  }
  ngOnInit() {
    this.title=sessionStorage.getItem('userName');
    this.acroute.paramMap.switchMap((param: ParamMap) => this.title = param.get('id')).subscribe();
  }
}
