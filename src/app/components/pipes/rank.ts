import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'rank'
})
export class RankPipe implements PipeTransform{
  transform(repos: any, , [viewBy]) {
    return repos.sort((a, b) => parseInt(b[viewBy]) - parseInt(a[viewBy]));
  }
}