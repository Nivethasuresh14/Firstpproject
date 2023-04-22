import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items : any[],searchTerm : string, searchBy : string) {
    if (!searchTerm) {
      return items;
    }
    console.log(searchBy);
    return items.filter(items => items.name === searchTerm)
  }
  
  
}