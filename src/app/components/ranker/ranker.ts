import {Component, OnInit} from 'angular2/core';
import {Http} from 'angular2/http';

import {ViewByComponent} from './viewby/viewby';
import {RepoComponent} from './repo/repo';

import data from './data';
import './ranker.sass';
const template = require('./ranker.html');

@Component({
  selector: 'ranker',
  directives: [ViewByComponent, RepoComponent],
  template
})
export class RankerComponent implements OnInit {
  repos: any[];

  constructor(
    private http: Http
  ) {}

  ngOnInit() {
    this.repos = data.netflix;

    console.log('this.repos: ', this.repos);
  }
}