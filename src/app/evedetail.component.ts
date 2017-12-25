import {Component, OnInit} from "@angular/core";
import {MethodService} from "./method.service";
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component(
  {
    selector:'app-eve',
    templateUrl:'./evedetail.component.html',
    styleUrls:['./evedetail.component.css']
  }
)
export class EvedetailComponent implements OnInit {
  title:string;
  tienei: string;
  tietitle: string;
  ping: object[];
  ngOnInit() {
    this.title='evedetail';
  }
}
