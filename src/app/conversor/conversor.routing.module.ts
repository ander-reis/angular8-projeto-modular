import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConversorRoutingComponent} from './conversor-routing.component';
import {ConversorComponent} from './components';


export const DashboardRoutes: Routes = [
  {
    path: 'conversor',
    component: ConversorRoutingComponent,
    children: [
      {
        path: '',
        component: ConversorComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(DashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ConversorRoutingModule {
}
