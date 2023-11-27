import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdCollapseNavbar } from './main-bar.component';

describe('NgbdCollapseNavbar', () => {
  let component: NgbdCollapseNavbar;
  let fixture: ComponentFixture<NgbdCollapseNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdCollapseNavbar ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbdCollapseNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
