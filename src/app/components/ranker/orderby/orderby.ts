import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';

import {AppStore} from '../../../common/stores/main-store';
import {AppActions} from '../../redux/actions/app';

@Component({
  selector: 'order-by',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="viewby orderby">
      <p>Order by</p>
      <li>
        <button
          [class.active]="'descending' === by"
          (click)="orderBy('descending')"
        >Descending</button>
      </li>
      <li>
        <button
          [class.active]="'ascending' === by"
          (click)="orderBy('ascending')"
        >Ascending</button>
      </li>
    </ul>
  `
})
export class OrderByComponent {
  data: any;
  @Input() by: string;

  constructor(
    private store: AppStore,
    private actions: AppActions
  ) {}

  orderBy(by: string): void {
    this.store.dispatch(this.actions.setOrderBy(by));
  }
}
