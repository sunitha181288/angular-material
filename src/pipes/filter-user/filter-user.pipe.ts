import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (searchText && searchText.length > 1) {
      items = searchText ? this.filterUsers(items, searchText) : items.slice();
    } else {
      items = [];
    }
    return items;
  }

  filterUsers(items: any[], value: string): any[] {
    const filterValue = value.toLowerCase();
    return items.filter(item => item.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
