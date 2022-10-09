import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortsCardComponent } from './shorts-card.component';

describe('ShortsCardComponent', () => {
  let component: ShortsCardComponent;
  let fixture: ComponentFixture<ShortsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
