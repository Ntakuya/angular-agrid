import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridTableComponent } from './grid-table/grid-table.component';

const routes: Routes = [
  {
    path: '',
    component: GridTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridTableRoutingModule {}
