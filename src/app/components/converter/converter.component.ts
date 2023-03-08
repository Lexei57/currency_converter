import {Component} from '@angular/core';
import { Currency } from 'src/app/models/converter.model';
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
  value1: number;
  value2: number;


  constructor(private converterService: ConverterService) {
  }

  onFromValueChange(): void {
    this.value2 = this.converterService.convert(this.fromCurrency, this.toCurrency, this.value1);
  }

  onToValueChange(): void {
    this.value1 = this.converterService.convert(this.toCurrency, this.fromCurrency, this.value2);
  }

  onChangeCurrency(): void {
    this.value2 = this.converterService.convert(this.fromCurrency, this.toCurrency, this.value1);
  }

  swapCurrencies(): void {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
    this.value2 = this.converterService.convert(this.fromCurrency, this.toCurrency, this.value1);
  }
}



