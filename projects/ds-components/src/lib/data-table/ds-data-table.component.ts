import { Component, Input } from '@angular/core';

export interface DsTableColumn {
  key: string;
  header: string;
  width?: string;
}

@Component({
  selector: 'ds-data-table',
  templateUrl: './ds-data-table.component.html',
  styleUrls: ['./ds-data-table.component.scss'],
})
export class DsDataTableComponent {
  @Input() columns: DsTableColumn[] = [];
  @Input() rows: Record<string, unknown>[] = [];
  @Input() striped = true;

  get displayedColumns(): string[] {
    return this.columns.map((c) => c.key);
  }
}
