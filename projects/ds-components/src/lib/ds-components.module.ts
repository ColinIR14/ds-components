import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DsButtonComponent } from './button/ds-button.component';
import { DsCardComponent } from './card/ds-card.component';
import { DsFormFieldComponent } from './form-field/ds-form-field.component';
import { DsDataTableComponent } from './data-table/ds-data-table.component';
import { DsAlertComponent } from './alert/ds-alert.component';
import { DsNavHeaderComponent } from './nav-header/ds-nav-header.component';

const COMPONENTS = [
  DsButtonComponent,
  DsCardComponent,
  DsFormFieldComponent,
  DsDataTableComponent,
  DsAlertComponent,
  DsNavHeaderComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: COMPONENTS,
})
export class DsComponentsModule {}
