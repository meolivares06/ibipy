import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'last'
})
export class LastPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): any {
    return value.length ? value[value.length - 1] : undefined;
  }

}
