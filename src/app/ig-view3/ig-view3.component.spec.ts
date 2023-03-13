import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgView3Component } from './ig-view3.component';

describe('IgView3Component', () => {
  let component: IgView3Component;
  let fixture: ComponentFixture<IgView3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgView3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgView3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
