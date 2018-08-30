import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDialComponent } from './custom-dial.component';

describe('CustomDialComponent', () => {
  let component: CustomDialComponent;
  let fixture: ComponentFixture<CustomDialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
