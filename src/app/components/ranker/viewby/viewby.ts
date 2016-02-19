import {Component, Input, ChangeDetectionStrategy, OnInit} from 'angular2/core';

import {AppStore} from '../../../common/stores/main-store';
import {AppActions} from '../../redux/actions/app';

import data from './data';
import './viewby.sass';

@Component({
  selector: 'view-by',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="viewby">
      <p>View by</p>
      <li *ngFor="#d of data">
        <button
          [class.active]="d.api_name === by"
          (click)="viewBy(d.api_name)"
        >{{d.name}}</button>
      </li>
    </ul>
  `
})
export class ViewByComponent implements OnInit {
  data: any;
  @Input() by: string;

  constructor(
    private store: AppStore,
    private actions: AppActions
  ) {}

  ngOnInit() {
    this.data = data.viewby;
  }

  viewBy(apiName: string): void {
    this.store.dispatch(this.actions.setViewBy(apiName));
  }
}
