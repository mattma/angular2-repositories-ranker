import {Component} from 'angular2/core';

import {RankerComponent} from '../ranker/ranker';

import './app.sass';

/*
 * App Component
 */
@Component({
  selector: 'app',
  directives: [RankerComponent],
  template: `
    <header>
      <h1>{{name}}</h1>
    </header>

    <main>
      <ranker></ranker>
    </main>
  `
})
export class App {
  name = 'Netflix Projects on Github';
  constructor() { }
}
