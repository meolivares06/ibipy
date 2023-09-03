import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullAsArray'
})
export class NullAsArrayPipe implements PipeTransform {

  transform(value: any[] | null | undefined): any[] {
    return value ? value : [];
  }

}
