import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildcompComponent } from './viewchildcomp.component';

describe('ViewchildcompComponent', () => {
  let component: ViewchildcompComponent;
  let fixture: ComponentFixture<ViewchildcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
