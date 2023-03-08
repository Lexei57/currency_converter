export interface IExchangeRatesResponse {
    base: Currency;
    rates: ExchangeRates;
  }

  export type ExchangeRates = {
    [key in Currency]: number
  }


export enum Currency {
    UAH = 'UAH',
    USD = 'USD',
    EUR = 'EUR',
    MDL = 'MDL',
    GBP = 'GBP',
    JPY = 'JPY',
    CHF = 'CHF'
}