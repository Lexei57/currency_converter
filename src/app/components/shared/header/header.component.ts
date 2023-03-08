import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  usdRate!: number;
  eurRate!: number;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getExchangeRates();
  }

  getExchangeRates() {
    const apiUrl = 'https://openexchangerates.org/api/latest.json?app_id=18392e1059f8498594bec31628fd3e31&symbols=USD,EUR,UAH';

    this.http.get(apiUrl).subscribe((data: any) => {
      this.usdRate = data.rates.USD * data.rates.UAH;
      this.eurRate = (data.rates.USD * data.rates.UAH) / (data.rates.EUR * data.rates.USD);
    });
  }

}
