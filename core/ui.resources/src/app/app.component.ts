import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  template: `<h1>Hello Angular - {{name}}</h1>`
})
export class AppComponent implements OnInit {
  name = 'This Message is from Angulars index.html calling app.component.ts ';

  public title : String = 'Loading title...';
  public content : String = 'Loading content...';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }
}
