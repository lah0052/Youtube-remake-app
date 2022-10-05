import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsLayoutComponent } from './subscriptions-layout.component';

describe('SubscriptionsLayoutComponent', () => {
  let component: SubscriptionsLayoutComponent;
  let fixture: ComponentFixture<SubscriptionsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
