import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-card',
  templateUrl: './ds-card.component.html',
  styleUrls: ['./ds-card.component.scss'],
})
export class DsCardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() elevated = true;
}
