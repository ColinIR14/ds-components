import { Component, EventEmitter, Input, Output } from '@angular/core';

export type DsButtonVariant = 'primary' | 'secondary' | 'danger';

@Component({
  selector: 'ds-button',
  templateUrl: './ds-button.component.html',
  styleUrls: ['./ds-button.component.scss'],
})
export class DsButtonComponent {
  @Input() variant: DsButtonVariant = 'primary';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() clicked = new EventEmitter<MouseEvent>();

  get color(): 'primary' | 'accent' | 'warn' {
    switch (this.variant) {
      case 'danger':
        return 'warn';
      case 'secondary':
        return 'accent';
      default:
        return 'primary';
    }
  }

  onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
