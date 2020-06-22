import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { GridTableComponent } from './grid-table/grid-table.component';
import { GridTableRoutingModule } from './grid-table-routing.module';

@NgModule({
  declarations: [GridTableComponent],
  imports: [
    CommonModule,
    GridTableRoutingModule,
    AgGridModule.withComponents([]),
  ],
})
export class GridTableModule {}
