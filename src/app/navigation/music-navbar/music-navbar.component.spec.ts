import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicNavbarComponent } from './music-navbar.component';

describe('MusicNavbarComponent', () => {
  let component: MusicNavbarComponent;
  let fixture: ComponentFixture<MusicNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
