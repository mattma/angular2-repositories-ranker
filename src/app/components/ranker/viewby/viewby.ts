import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';

const template = require('./viewby.html');

@Component({
  selector: 'view-by',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template
})
export class ViewByComponent {

}