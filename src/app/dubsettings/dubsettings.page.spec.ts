import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DubsettingsPage } from './dubsettings.page';

describe('DubsettingsPage', () => {
  let component: DubsettingsPage;
  let fixture: ComponentFixture<DubsettingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DubsettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
