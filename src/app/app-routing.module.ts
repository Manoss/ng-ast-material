import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EvenementsTableComponent } from './evenements-table/evenements-table.component';

const routes: Routes = [
  { path: 'evenements', component: EvenementsTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
