import {Component} from 'angular2/core';

import './app.sass';

/*
 * App Component
 */
@Component({
  selector: 'app',
  template: require('./app.html')
})
export class App {
  name = 'Angular2 Rocks';
  constructor() { }
}
