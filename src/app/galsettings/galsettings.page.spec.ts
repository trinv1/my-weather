import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalsettingsPage } from './galsettings.page';

describe('GalsettingsPage', () => {
  let component: GalsettingsPage;
  let fixture: ComponentFixture<GalsettingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GalsettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
