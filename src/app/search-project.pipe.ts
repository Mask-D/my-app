import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProject'
})
export class SearchProjectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(value => {
      return value.name.includes(args)
    });
  }

}
