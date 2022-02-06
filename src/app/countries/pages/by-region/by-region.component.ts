import { Component } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: CountryResponse[] = [];
  error: boolean = false;

  constructor(private countryService: CountryService) {}

  getCssClass(region: string): string {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activateRegion(region: string) {
    this.activeRegion = region;
  }

  searchByRegion(region: string): void {
    this.error = false;
    this.activateRegion(region);

    this.countryService.searchRegion(region).subscribe({
      next: (countries) => (this.countries = countries),
      error: (error) => {
        this.error = true;
        this.countries = [];
      },
    });
  }
}
