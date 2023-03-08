import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  private DEFAULT_PRECISION: number = 2;
  private apiUrl = 'https://openexchangerates.org/api/latest.json';
  private appId = '18392e1059f8498594bec31628fd3e31';
  private exchangeRates: { [key: string]: number };
  


  constructor(private http: HttpClient) {
    const url = `${this.apiUrl}?app_id=${this.appId}`;
    this.http.get(url).subscribe((data: { [key: string]: any }) => {
      this.exchangeRates = data['rates'];
    });
  }

  convert(currencyFrom: string, currencyTo: string, amount: number): number {
    const rateFrom = this.exchangeRates[currencyFrom];
    const rateTo = this.exchangeRates[currencyTo];
    return +(amount * (rateTo / rateFrom)).toFixed(this.DEFAULT_PRECISION);
  }


}
