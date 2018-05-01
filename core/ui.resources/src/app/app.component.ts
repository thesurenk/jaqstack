import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Angular Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }
