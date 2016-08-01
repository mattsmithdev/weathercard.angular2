import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'keys'})
export class EnumKeysPipe implements PipeTransform {
 transform(value, args: string[]): any {
 let keys = [];
 for (let enumMember in value) {
    let isValueProperty = parseInt(enumMember, 10) >= 0;
    if (isValueProperty) {
    keys.push({key: enumMember, value: value[enumMember]});
    }
 }
 return keys;
 }
}
