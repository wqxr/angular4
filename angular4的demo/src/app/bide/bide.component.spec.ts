import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BideComponent } from './bide.component';

describe('BideComponent', () => {
  let component: BideComponent;
  let fixture: ComponentFixture<BideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
