import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BelsettingsPage } from './belsettings.page';

describe('BelsettingsPage', () => {
  let component: BelsettingsPage;
  let fixture: ComponentFixture<BelsettingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BelsettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
