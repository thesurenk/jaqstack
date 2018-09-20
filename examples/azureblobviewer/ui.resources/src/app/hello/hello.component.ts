import { Component, OnInit } from '@angular/core';
import {HelloService} from "./hello.service";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [HelloService]
})
export class HelloComponent implements OnInit {

  helloFromJava : any;

  public jsonObject: any;

  constructor(private helloService : HelloService) { }

  ngOnInit() {
    this.getHelloFromJava();
  }

  getHelloFromJava() : void {
    console.log("....getHelloFromJava!");
    this.helloFromJava = this.helloService.getHelloWorldFromJava()
      .subscribe(resp => {

        console.log(resp);
        this.helloFromJava = JSON.stringify(resp);
    });
  }
}
