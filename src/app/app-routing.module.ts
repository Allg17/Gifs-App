import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  MainPageComponent
} from './Gifs-Page/main-page.component';
import {
  IndexPageComponent
} from './index-page.component';
import {
  PaisesMainpageComponent
} from './Paises-App/paises-mainpage.component';


const routes: Routes = [{
  path: '',
  component: IndexPageComponent,
  pathMatch: 'full'
},
{
  path: 'Gifs',
  component: MainPageComponent
},
{
  path: 'Paises',
  loadChildren: () => import('./Paises-App/Paises-routing.module').then(m => m.PaisesRoutingModule)
},
{
  path: '**',
  redirectTo: ''
}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
