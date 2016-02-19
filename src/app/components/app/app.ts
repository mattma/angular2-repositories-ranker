import {Component} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {RankerComponent} from '../ranker/ranker';

import '../../../assets/styles/_reset.sass';
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
      <ranker [repos]="repos"></ranker>
    </main>
  `
})
export class App {
  name: string;
  repos: any;

  constructor(private http: Http) {
    this.name = 'Netflix Projects on Github';
    this.http.get('https://api.github.com/orgs/netflix/repos')
      .map((res: Response) => res.json())
      .subscribe((data) => this.repos = data);
  }
}
