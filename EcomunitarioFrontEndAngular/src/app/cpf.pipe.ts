import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCpfFormat]'
})
export class CpfFormatDirective {

  constructor(private el: ElementRef, private control: NgControl) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    const cleaned = value.replace(/\D/g, ''); // Remove all non-digit characters
    let formattedValue = '';

    if (cleaned.length <= 3) {
      formattedValue = cleaned;
    } else if (cleaned.length <= 6) {
      formattedValue = `${cleaned.slice(0, 3)}.${cleaned.slice(3)}`;
    } else if (cleaned.length <= 9) {
      formattedValue = `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6)}`;
    } else {
      formattedValue = `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6, 9)}-${cleaned.slice(9, 11)}`;
    }

    this.el.nativeElement.value = formattedValue;
    this.control.control?.setValue(formattedValue, { emitEvent: false });
  }
}
