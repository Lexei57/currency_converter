import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usdRate!: number;
  eurRate!: number;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getExchangeRates();
  }

  getExchangeRates() {
    const apiUrl = 'https://openexchangerates.org/api/latest.json?app_id=18392e1059f8498594bec31628fd3e31&symbols=USD,EUR';

    this.http.get(apiUrl).subscribe((data: any) => {
      this.usdRate = data.rates.USD;
      this.eurRate = data.rates.EUR;
    });
  }
}
