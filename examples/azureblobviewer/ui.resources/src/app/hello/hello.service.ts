import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';


@Injectable()
export class HelloService {

  //serverUrl : string = environment.BACKEND_URL + "/service/dbservice/product";
  serverUrl : string = environment.BACKEND_URL + "/service/blobservice/azure/fetch";

  constructor(private http: HttpClient) { }

  getHelloWorldFromService() : string {
      return "hello world from the service";
  }

  getHelloWorldFromJava() {
      return this.http.get(this.serverUrl);
  }



  getBlobsFromAzure() {
     //build the post with inputs

      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });


      //return this.http.post(this.serverUrl, {},{ headers });

    return this.http.post(this.serverUrl,
      JSON.stringify({
        azureAcountName: "acsazurestore",
        azureAcountKey: "qjC6s44AmSbAkJ7Xqdsks/jjZDIYRTY8qgWKds8w8PXdL+Q08mU/yu3Oh/4wO3sYTwNgNiA6EG66gBRWBqMBNA==",
        azureContainer:"acsazurecontainer",
      })).subscribe(
      data => {
        alert('ok');
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
  }

}
