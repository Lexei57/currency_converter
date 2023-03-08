import {Component} from '@angular/core';
import {ConverterService} from '../../services/converter.service';




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



