import {Component, Input, ChangeDetectionStrategy, OnInit} from 'angular2/core';

import data from './data';
import './viewby.sass';

@Component({
  selector: 'view-by',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="viewby">
      <p>View by:</p>
      <li *ngFor="#d of data">
        <button
          [class.active]="d.isActive"
          (click)="viewBy(d.api_name)"
        >{{d.name}}</button>
      </li>
    </ul>
  `
})
export class ViewByComponent implements OnInit {
  data: any;

  ngOnInit() {
    this.data = data.viewby;
  }

  viewBy(apiName: string): void {
    console.log('apiName: ', apiName);
  }
}