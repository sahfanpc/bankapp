import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Delete1Component } from './delete1.component';

describe('Delete1Component', () => {
  let component: Delete1Component;
  let fixture: ComponentFixture<Delete1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Delete1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Delete1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
