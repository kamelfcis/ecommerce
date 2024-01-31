import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllHerosComponent } from './show-all-heros.component';

describe('ShowAllHerosComponent', () => {
  let component: ShowAllHerosComponent;
  let fixture: ComponentFixture<ShowAllHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllHerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
