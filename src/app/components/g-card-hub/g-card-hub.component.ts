import { Component, Input } from '@angular/core';

@Component({
  selector: 'g-card-hub',
  templateUrl: './g-card-hub.component.html',
  styleUrls: ['./g-card-hub.component.scss']
})
export class GCardHubComponent {

  @Input() infoCard: any = {}

}
