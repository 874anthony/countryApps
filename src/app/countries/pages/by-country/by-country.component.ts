import { Component } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  field: string = '';
  error: boolean = false;
  countries: CountryResponse[] = [];
  suggestedCountries: CountryResponse[] = [];

  constructor(private countryService: CountryService) {}

  searchCountry(field: string): void {
    this.error = false;
    this.field = field;

    this.countryService.searchCountry(this.field).subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (err) => {
        this.error = true;
        this.countries = [];
      },
    });
  }

  suggestions(field: string) {
    this.error = false;

    this.countryService.searchCountry(field).subscribe((countries) => {
      this.suggestedCountries = countries.splice(0, 5);
    });
  }
}
