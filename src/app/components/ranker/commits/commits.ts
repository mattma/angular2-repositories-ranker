import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';

import './commits.sass';
const template = require('./commits.html');

@Component({
  selector: 'commits',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template
})
export class CommitsComponent {
  @Input() data: any;
  @Output() close: EventEmitter<string> = new EventEmitter();
}