import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberComponent } from './members-list.component';

describe('MembersListComponent', () => {
  let component: MemberComponent;
  let fixture: ComponentFixture<MemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
