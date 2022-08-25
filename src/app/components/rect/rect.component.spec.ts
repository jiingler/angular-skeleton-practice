import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RectComponent } from './rect.component';

describe('RectComponent', () => {
  let component: RectComponent;
  let fixture: ComponentFixture<RectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
