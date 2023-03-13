import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgViewComponent } from './ig-view.component';

describe('IgViewComponent', () => {
  let component: IgViewComponent;
  let fixture: ComponentFixture<IgViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
