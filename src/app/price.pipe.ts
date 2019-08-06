import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    const valueStg: string = String(value).replace(/(\d)(?=(?:[0-9]{3})+\b)/,'$1 ');
    return `$ ${valueStg}`;
  }

}
