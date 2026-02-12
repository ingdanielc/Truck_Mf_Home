import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  RouterOutlet,
} from '@angular/router';
import pkg from 'package.json';
import { filter, map } from 'rxjs';
import { GMenuComponent } from './components/g-menu/g-menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, GMenuComponent],
})
export class AppComponent implements OnInit {
  title = 'CashTruck';
  version = pkg.version;
  isLogoMenuBar = true;
  tituloMenuBar = '';
  isSidebar: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
      )
      .subscribe((route) => {
        this.tituloMenuBar = 'CashTruck';
        this.isSidebar = false;
        this.isLogoMenuBar = true;
        if (route.snapshot.url[0].path === 'configuration') {
          this.isLogoMenuBar = false;
          this.isSidebar = true;
        }
        if (route.snapshot.url[0].path === 'home') {
          this.tituloMenuBar = 'CashTruck';
        }
      });
  }
}
