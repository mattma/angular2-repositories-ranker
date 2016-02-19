import {Component, Input, OnInit, OnDestroy} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {AppStore} from '../../common/stores/main-store';
import {RankPipe} from '../pipes/rank';

import {ViewByComponent} from './viewby/viewby';
import {OrderByComponent} from './orderby/orderby';
import {RepoComponent} from './repo/repo';
import {CommitsComponent} from './commits/commits';

import './ranker.sass';
const template = require('./ranker.html');

@Component({
  selector: 'ranker',
  directives: [ViewByComponent, RepoComponent, OrderByComponent, CommitsComponent],
  pipes: [RankPipe],
  template
})
export class RankerComponent implements OnInit, OnDestroy {
  commits: any[];
  viewBy: string;
  orderBy: string;
  showCommits: boolean;
  unsubscribe: Function;
  @Input() repos: any[];

  constructor(
    private http: Http,
    private store: AppStore
  ) {
    this.unsubscribe = this.store.subscribe(state => {
      this.viewBy = state.viewBy;
      this.orderBy = state.orderBy;
    });
  }

  ngOnInit(): void {
    // this.repos = mockData.netflix;
    // this.commits = mockData.commits;
    this.showCommits = false;

    const state = this.store.getState();
    this.viewBy = state.viewBy;
    this.orderBy = state.orderBy;
  }

  onViewCommits(url: string): void {
    this.http.get(url)
      .map((res: Response) => res.json())
      .subscribe((data) => {
        this.commits = data;
        this.showCommits = true;
      });
  }

  onHideCommits(): void {
    this.showCommits = false;
  }

  ngOnDestroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
