import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattableColspanComponent } from './mattable-colspan.component';

describe('MattableColspanComponent', () => {
  let component: MattableColspanComponent;
  let fixture: ComponentFixture<MattableColspanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MattableColspanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MattableColspanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
