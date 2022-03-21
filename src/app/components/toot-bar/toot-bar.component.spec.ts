import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TootBarComponent } from './toot-bar.component';

describe('TootBarComponent', () => {
  let component: TootBarComponent;
  let fixture: ComponentFixture<TootBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TootBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TootBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
