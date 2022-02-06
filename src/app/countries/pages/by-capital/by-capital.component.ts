import { Component, OnInit } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent implements OnInit {
  field: string = '';
  error: boolean = false;
  countries: CountryResponse[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  searchByCapital(capital: string): void {
    this.error = false;
    this.field = capital;

    this.countryService.searchByCapital(capital).subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (err) => {
        this.error = true;
        this.countries = [];
      },
    });
  }
}
