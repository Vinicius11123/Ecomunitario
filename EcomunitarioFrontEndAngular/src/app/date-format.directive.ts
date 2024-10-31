import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDateFormat]'
})
export class DateFormatDirective {

  constructor(private el: ElementRef, private control: NgControl) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    const cleaned = value.replace(/\D+/g, ''); // Remove all non-digit characters
    const day = cleaned.substring(0, 2);
    const month = cleaned.substring(2, 4);
    const year = cleaned.substring(4, 8);

    let formattedValue = day;
    if (month) {
      formattedValue += `/${month}`;
    }
    if (year) {
      formattedValue += `/${year}`;
    }

    this.el.nativeElement.value = formattedValue.trim();
    this.control.control?.setValue(formattedValue.trim(), { emitEvent: false });
  }
}
