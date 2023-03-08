import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { Currency, ExchangeRates, IExchangeRatesResponse } from '../models/converter.model';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  private DEFAULT_PRECISION: number = 2;
  private apiUrl = 'https://openexchangerates.org/api/latest.json';
  private appId = '18392e1059f8498594bec31628fd3e31';

  private exchangeRates$$: BehaviorSubject<ExchangeRates> = new BehaviorSubject<ExchangeRates>(undefined)

  exchangeRates$: Observable<ExchangeRates> = this.exchangeRates$$.asObservable()
  .pipe(
    filter((exchangeRates: ExchangeRates) => !!exchangeRates) // will return only NOT undefined values
  )


  constructor(private http: HttpClient) {
    this.getExchangeRates().subscribe()
  }

  convert(currencyFrom: Currency, currencyTo: Currency, amount: number): number {
    const exchangeRates: ExchangeRates = this.exchangeRates$$.getValue();
    const rateFrom: number = exchangeRates[currencyFrom];
    const rateTo: number = exchangeRates[currencyTo];
    return +(amount * (rateTo / rateFrom)).toFixed(this.DEFAULT_PRECISION);
  }

  getExchangeRates(): Observable<IExchangeRatesResponse> {
    const url: string = `${this.apiUrl}?app_id=${this.appId}`;
    return this.http.get<IExchangeRatesResponse>(url)
    .pipe(
      tap((data: IExchangeRatesResponse) => this.exchangeRates$$.next(data.rates))
    )
  }


}
