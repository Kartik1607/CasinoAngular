import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouletteTableComponent } from './roulette-table.component';

describe('RouletteTableComponent', () => {
  let component: RouletteTableComponent;
  let fixture: ComponentFixture<RouletteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouletteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouletteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
