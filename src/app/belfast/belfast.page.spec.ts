import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BelfastPage } from './belfast.page';

describe('BelfastPage', () => {
  let component: BelfastPage;
  let fixture: ComponentFixture<BelfastPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BelfastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
