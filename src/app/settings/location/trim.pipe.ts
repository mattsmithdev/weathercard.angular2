import { Pipe, PipeTransform } from '@angular/core';
/*
 * Trim the string
*/
@Pipe({name: 'trim'})
export class TrimPipe implements PipeTransform {
  transform(value: string): string {
    return (value.trim());
  }
}
