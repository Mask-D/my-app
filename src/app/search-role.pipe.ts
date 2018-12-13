import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRole'
})
export class SearchRolePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(value => {
      return value.role_archetype.includes(args)
    });
  }

}
