import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(phone: any, args?: any): any {
    console.log(phone);
    return phone.replace(/\D+/g, '')
     .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
}
