export interface IExchangeRatesResponse {
    base: Currency;
    rates: string;
  }



export enum Currency {
    UAH = 'UAH',
    USD = 'USD',
    EUR = 'EUR',
    MDL = 'MDL',
}