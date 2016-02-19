import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';

const template = require('./repo.html');

@Component({
  selector: 'repo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template
})
export class RepoComponent {
  @Input() data: any;
}