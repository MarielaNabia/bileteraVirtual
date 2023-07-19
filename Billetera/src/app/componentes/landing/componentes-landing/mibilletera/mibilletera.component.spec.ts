import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MibilleteraComponent } from './mibilletera.component';

describe('MibilleteraComponent', () => {
  let component: MibilleteraComponent;
  let fixture: ComponentFixture<MibilleteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MibilleteraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MibilleteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
