import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, term: any): any {
    if(term === undefined) return items;
    
    return items.filter(function(items){
      return items.title.toLowerCase().includes(term.toLowerCase());
    })
  }

}
