import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpcComponent } from './httpc.component';

describe('HttpcComponent', () => {
  let component: HttpcComponent;
  let fixture: ComponentFixture<HttpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
