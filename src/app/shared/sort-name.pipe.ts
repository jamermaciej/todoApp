import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';

@Pipe({
  name: 'sortName',
  // pure: false // default - true
  // sortuje tablice po dodaniu nowego tasku, nawet po ruchu mysza, NIE ZALECANE
})
export class SortNamePipe implements PipeTransform {

  transform(value: Array<Task>, args?: any): Array<Task> {
    return value.sort( (a, b) => {
      if ( a.name.toLowerCase() > b.name.toLowerCase() ) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
