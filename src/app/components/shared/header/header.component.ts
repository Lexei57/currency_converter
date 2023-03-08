import {Component, OnInit} from '@angular/core';
import {ExchangeRates} from '../../../models/converter.model';
import {ConverterService} from '../../../services/converter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  usdRate!: number;
  eurRate!: number;

  constructor(private converterService: ConverterService) {
  }

  ngOnInit(): void {
    this.converterService.exchangeRates$.subscribe(({USD, UAH, EUR}: ExchangeRates) => {
      this.usdRate = USD * UAH;
      this.eurRate = (USD * UAH) / (EUR * USD);
    });
  }
}
