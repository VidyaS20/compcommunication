import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewparentcompComponent } from './viewparentcomp.component';

describe('ViewparentcompComponent', () => {
  let component: ViewparentcompComponent;
  let fixture: ComponentFixture<ViewparentcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewparentcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewparentcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
