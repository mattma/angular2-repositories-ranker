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
      <h1>Organization: {{name}}</h1>
      <div>
        <input
          #org
          type="text"
          (keyup.enter)="searchGithub(org)"
          placeholder="Github Organizations Names. Ex: netflix, angular, reactjs">
        <button (click)="searchGithub(org)">Search</button>
      </div>
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
    this.fetcher('netflix');
  }

  fetcher(name: string): void {
    this.name = name;
    this.http.get(`https://api.github.com/orgs/${name}/repos`)
      .map((res: Response) => res.json())
      .subscribe((data) => this.repos = data);
  }

  searchGithub(org: HTMLInputElement): void {
    const name = org.value.trim();
    this.fetcher(name);
    org.value = null;
  }
}
