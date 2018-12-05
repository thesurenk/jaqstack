import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';


@Injectable()
export class HelloService {

  serverUrl : string = environment.BACKEND_URL + "/service/dbservice/product";

  constructor(private http: HttpClient) { }

  getHelloWorldFromService() : string {
      return "hello world from the service";
  }

  getHelloWorldFromJava() {
    return this.http.get(this.serverUrl);
  }

}
