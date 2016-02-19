import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';

import './repo.sass';
const template = require('./repo.html');

@Component({
  selector: 'repo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template
})
export class RepoComponent {
  @Input() data: any;
}