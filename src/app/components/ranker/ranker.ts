import {Component, OnInit, OnDestroy} from 'angular2/core';
import {Http} from 'angular2/http';

import {AppStore} from '../../common/stores/main-store';
import {RankPipe} from '../pipes/rank';

import {ViewByComponent} from './viewby/viewby';
import {OrderByComponent} from './orderby/orderby';
import {RepoComponent} from './repo/repo';

import data from './data';
import './ranker.sass';
const template = require('./ranker.html');

@Component({
  selector: 'ranker',
  directives: [ViewByComponent, RepoComponent, OrderByComponent],
  pipes: [RankPipe],
  template
})
export class RankerComponent implements OnInit, OnDestroy {
  repos: any[];
  viewBy: string;
  orderBy: string;
  unsubscribe: Function;

  constructor(
    private http: Http,
    private store: AppStore
    // private actions: AppActions
  ) {
    this.unsubscribe = this.store.subscribe(state => {
      this.viewBy = state.viewBy;
      this.orderBy = state.orderBy;
    });
  }

  ngOnInit(): void {
    this.repos = data.netflix;

    const state = this.store.getState();
    this.viewBy = state.viewBy;
    this.orderBy = state.orderBy;

    console.log('this.repos: ', this.repos);
  }

  ngOnDestroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}