// Angular core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Rxjs
import { switchMap, tap } from 'rxjs';
// Own services
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styles: [],
})
export class CountryDetailsComponent implements OnInit {
  country!: CountryResponse[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryByCode(id)),
        tap(console.log)
      )
      .subscribe((country) => (this.country = country));
  }
}
