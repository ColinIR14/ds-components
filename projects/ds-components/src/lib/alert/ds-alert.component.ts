import { Component, EventEmitter, Input, Output } from '@angular/core';

export type DsAlertSeverity = 'info' | 'success' | 'warning' | 'error';

@Component({
  selector: 'ds-alert',
  templateUrl: './ds-alert.component.html',
  styleUrls: ['./ds-alert.component.scss'],
})
export class DsAlertComponent {
  @Input() severity: DsAlertSeverity = 'info';
  @Input() title = '';
  @Input() dismissible = false;
  @Output() dismissed = new EventEmitter<void>();

  visible = true;

  get icon(): string {
    switch (this.severity) {
      case 'success':
        return 'check_circle';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      default:
        return 'info';
    }
  }

  dismiss(): void {
    this.visible = false;
    this.dismissed.emit();
  }
}
