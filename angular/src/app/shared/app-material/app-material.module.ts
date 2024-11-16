import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatToolbar} from '@angular/material/toolbar';

@NgModule({
  imports:[
    MatTable,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatCard,
    MatCardContent,
    MatToolbar
  ],
 exports:[
   MatTable,
   MatHeaderRow,
   MatRow,
   MatRowDef,
   MatHeaderRowDef,
   MatColumnDef,
   MatHeaderCell,
   MatHeaderCellDef,
   MatCellDef,
   MatCell,
   MatCard,
   MatCardContent,
   MatToolbar
 ]
})
export class AppMaterialModule { }
