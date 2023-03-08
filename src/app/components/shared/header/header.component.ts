import {Component, OnInit} from '@angular/core';
import { ConverterService } from 'src/app/services/converter.service';
import { ExchangeRates } from '../../../models/converter.model'


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

  ngOnInit() {
    this.converterService.exchangeRates$.subscribe(({USD, UAH, EUR}: ExchangeRates)=> {
      this.usdRate = USD * UAH;
      this.eurRate = (USD * UAH) / (EUR * USD)
    })
  }

}
