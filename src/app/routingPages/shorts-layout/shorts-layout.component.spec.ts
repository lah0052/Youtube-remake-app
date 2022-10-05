import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortsLayoutComponent } from './shorts-layout.component';

describe('ShortsLayoutComponent', () => {
  let component: ShortsLayoutComponent;
  let fixture: ComponentFixture<ShortsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
