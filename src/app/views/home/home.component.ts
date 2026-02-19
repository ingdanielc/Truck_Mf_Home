import { Component, OnDestroy, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly allCards: any = [
    {
      routing: '/site/owners',
      title: 'Socios',
      icon: 'fa-solid fa-user-group',
      descriptions:
        'Permite gestionar de manera eficiente el registro y control de tus afiliados.',
    },
    {
      routing: '/site/memberships',
      title: 'Membresías',
      icon: 'fa-solid fa-clipboard-check',
      descriptions:
        'Permite configurar los planes que tu negocio ofrece. Puedes incluir, por ejemplo, el pase libre, tiqueteras y otros planes.',
    },
    {
      routing: '/site/access-control',
      title: 'Control de Acceso',
      icon: 'fa-solid fa-unlock-keyhole',
      descriptions:
        'Permite gestionar el acceso de tus afiliados de manera segura y eficiente.',
    },
    {
      routing: '/site/routines',
      title: 'Rutinas',
      icon: 'fa-solid fa-child-reaching',
      descriptions:
        'Permite crear, gestionar y asignar planes de entrenamiento personalizados para tus afiliados.',
    },
    {
      routing: '/site/products',
      title: 'Productos',
      icon: 'fa-brands fa-product-hunt',
      descriptions:
        'Permite gestionar el inventario de artículos disponibles en tu negocio.',
    },
    {
      routing: '/site/sales',
      title: 'Ventas',
      icon: 'fa-solid fa-sack-dollar',
      descriptions:
        'Permite gestionar y registrar las transacciones de productos o servicios de manera eficiente.',
    },
    {
      routing: '/site/notifications',
      title: 'Notificaciones',
      icon: 'fa-solid fa-comments',
      descriptions:
        'Permite enviar y gestionar notificaciones en tiempo real para mantener informados a tus afiliados.',
    },
    {
      routing: '/site/security',
      title: 'Seguridad',
      icon: 'fa-solid fa-id-card-clip',
      descriptions:
        'Permite gestionar usuarios, gestionar roles y asignar permisos de la aplicación.',
    },
  ];

  listCard: any = [];
  private userSub?: Subscription;

  constructor(
    private readonly tokenService: TokenService,
    private readonly router: Router,
    private readonly securityService: SecurityService,
  ) {}

  ngOnInit(): void {
    this.listCard = [...this.allCards];
    this.subscribeToUserContext();
  }

  private subscribeToUserContext(): void {
    this.userSub = this.securityService.userData$.subscribe({
      next: (user) => {
        if (user) {
          const role = (user.userRoles?.[0]?.role?.name || '').toUpperCase();
          this.filterCards(role);
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

  private filterCards(role: string): void {
    if (role.includes('ADMINISTRADOR')) {
      this.listCard = this.allCards;
    } else if (role.includes('PROPIETARIO') || role.includes('CONDUCTOR')) {
      this.listCard = this.allCards.filter(
        (card: any) => card.title !== 'Socios' && card.title !== 'Seguridad',
      );
    }
  }

  logout() {
    this.tokenService.clearToken();
    this.router.navigateByUrl('/auth');
  }
}
