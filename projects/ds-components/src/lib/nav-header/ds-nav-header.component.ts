import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface DsNavLink {
  label: string;
  route: string;
  active?: boolean;
}

@Component({
  selector: 'ds-nav-header',
  templateUrl: './ds-nav-header.component.html',
  styleUrls: ['./ds-nav-header.component.scss'],
})
export class DsNavHeaderComponent {
  @Input() appName = '';
  @Input() links: DsNavLink[] = [];
  @Output() navigate = new EventEmitter<DsNavLink>();
  @Output() menuToggle = new EventEmitter<void>();

  onNavigate(link: DsNavLink, event: Event): void {
    event.preventDefault();
    this.navigate.emit(link);
  }
}
