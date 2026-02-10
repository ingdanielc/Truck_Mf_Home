import { Component, Input } from '@angular/core';

@Component({
  selector: 'g-menu',
  templateUrl: './g-menu.component.html',
  styleUrls: ['./g-menu.component.scss'],
})
export class GMenuComponent {
  showMenubar: boolean = true;
  showBreadcrumb: boolean = true;
  isMargin: boolean = true;

  @Input() showFooter: boolean = false;
  @Input() version: string = '';
  @Input() tituloMenuBar: string = '';
  @Input() isLogoMenuBar: boolean = true;

  constructor() {}

  toggleMenu() {
    this.showMenubar = !this.showMenubar;
  }

  toggleBreadcrumb() {
    this.showBreadcrumb = !this.showBreadcrumb;
  }
}
