import {Component} from '@angular/core';
import {Currency} from '../../models/converter.model';
import {ConverterService} from '../../services/converter.service';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {

  currencies: string[] = Object.values(Currency);
  fromCurrency: Currency = Currency.USD;
  toCurrency: Currency = Currency.UAH;
  value1: number = 0;
  value2: number = 0;


  constructor(private converterService: ConverterService) {
  }

  onFromValueChange(): void {
    this.value2 = this.converterService.convert(this.fromCurrency, this.toCurrency, this.value1)
  }

  onToValueChange(): void {
    this.value1 = this.converterService.convert(this.toCurrency, this.fromCurrency, this.value2)
  }

  onChangeCurrency(): void {
    this.value2 = this.converterService.convert(this.fromCurrency, this.toCurrency, this.value1)
  }

  swapCurrencies(): void {
    const temp: Currency = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
    this.value2 = this.converterService.convert(this.fromCurrency, this.toCurrency, this.value1)
  }
}



