import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowherosComponent } from './showheros.component';

describe('ShowherosComponent', () => {
  let component: ShowherosComponent;
  let fixture: ComponentFixture<ShowherosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowherosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowherosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
