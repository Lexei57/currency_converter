import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ConverterService} from '../../services/converter.service';
import {ErrorStateMatcher} from '@angular/material/core';




@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {

  currencies: string[] = ['USD', 'EUR', 'UAH'];
  currency1: string = 'USD';
  currency2: string = 'UAH';
  value1: number = 0;
  value2: number = 0;

  selected = new FormControl('valid', );
  matcher = new MyErrorStateMatcher();


  constructor(private converterService: ConverterService) {
  }

  onValue1Change() {
    this.value2 = +this.converterService.convert(this.currency1, this.currency2, this.value1).toFixed(2);
  }

  onValue2Change() {
    this.value1 = +this.converterService.convert(this.currency2, this.currency1, this.value2).toFixed(2);
  }

  onChangeCurrency() {
    this.value2 = +this.converterService.convert(this.currency1, this.currency2, this.value1).toFixed(2);
  }

  swapCurrencies() {
    const temp = this.currency1;
    this.currency1 = this.currency2;
    this.currency2 = temp;
    this.value2 = +this.converterService.convert(this.currency1, this.currency2, this.value1).toFixed(2);
  }
}

class MyErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

