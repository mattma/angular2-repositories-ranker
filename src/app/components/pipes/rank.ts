import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'rank'
})
export class RankPipe implements PipeTransform{
  transform(repos: any, , [viewBy, orderBy]) {
    return repos.sort((a, b) =>
      orderBy === 'descending' ?
        parseInt(b[viewBy]) - parseInt(a[viewBy]) :
        parseInt(a[viewBy]) - parseInt(b[viewBy])
      );
  }
}