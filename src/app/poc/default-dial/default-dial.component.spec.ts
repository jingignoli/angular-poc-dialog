import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDialComponent } from './default-dial.component';

describe('DefaultDialComponent', () => {
  let component: DefaultDialComponent;
  let fixture: ComponentFixture<DefaultDialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultDialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
