import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { PorPaisComponent } from './Pais/Pages/por-pais/por-pais.component';
import { PorRegionComponent } from './Pais/Pages/por-region/por-region.component';

import { PaisesMainpageComponent } from './paises-mainpage.component';
import { PorCapitalComponent } from './Pais/Pages/por-capital/por-capital.component';
import { VerPaisComponent } from './Pais/Pages/ver-pais/ver-pais.component';

const routes: Routes = [{
  path: '',
  component: PaisesMainpageComponent,
  children: [
    {
      path: 'pais',
      component: PorPaisComponent,
      pathMatch: 'full'
    },
    {
      path: 'region',
      component: PorRegionComponent
    },
    {
      path: 'region/:id',
      component: VerPaisComponent
    },
    {
      path: 'capital',
      component: PorCapitalComponent
    },
    {
      path: 'capital/:id',
      component: VerPaisComponent
    },
    {
      path: 'pais/:id',
      component: VerPaisComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
  ]
},

];

// const routes: Routes = [{
//   path: '',
//   component: PaisesMainpageComponent,
//   pathMatch: 'full'
// },
// {
//   path: 'pais',
//   component: PorPaisComponent,
//   pathMatch: 'full'
// },
// {
//   path: 'region',
//   component: PorRegionComponent
// },
// {
//   path: 'capital',
//   component: PorCapitalComponent
// },
// {
//   path: 'pais/:id',
//   component: VerPaisComponent
// },
// {
//   path: '**',
//   redirectTo: ''
// }
// ];




@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PaisesRoutingModule {

}
