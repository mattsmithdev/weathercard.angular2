import { Pipe, PipeTransform } from '@angular/core';
import { Scale } from '../shared/scale.enum';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'scale'})
export class ScalePipe implements PipeTransform {
  transform(value: number, scale: Scale): number {
    return (Number(scale) === Scale.C) ? this.convertToC(value) : value;
  }

    private convertToC(fTemp: number): number {
        return Math.round((fTemp - 32) * (5 / 9));
    }

    private convertToF(cTemp: number): number {
        return Math.round((cTemp * (9 / 5)) + 32);
    }
}
