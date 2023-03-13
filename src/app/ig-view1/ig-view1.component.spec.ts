import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgView1Component } from './ig-view1.component';

describe('IgView1Component', () => {
  let component: IgView1Component;
  let fixture: ComponentFixture<IgView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgView1Component ],
      imports: [ NoopAnimationsModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
