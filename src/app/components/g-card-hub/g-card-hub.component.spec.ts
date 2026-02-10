import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GCardHubComponent } from './g-card-hub.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GCardHubComponent', () => {
  let component: GCardHubComponent;
  let fixture: ComponentFixture<GCardHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GCardHubComponent, ],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GCardHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
