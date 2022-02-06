import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ByCountryComponent } from './countries/pages/by-country/by-country.component';
import { ByRegionComponent } from './countries/pages/by-region/by-region.component';
import { ByCapitalComponent } from './countries/pages/by-capital/by-capital.component';
import { CountryDetailsComponent } from './countries/pages/country-details/country-details.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: ByRegionComponent,
  },
  {
    path: 'capital',
    component: ByCapitalComponent,
  },
  {
    path: 'country/:id',
    component: CountryDetailsComponent,
  },
  // Fallback / Page does not exist
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
