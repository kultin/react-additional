import { Country } from 'entities/Country/model/types/Country';
import { Currency } from 'entities/Currency/model/types/currency';

export interface Profile {
  id?: string;
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}
