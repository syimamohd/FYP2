import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuhotelAdminPage } from './menuhotel-admin.page';

describe('MenuhotelAdminPage', () => {
  let component: MenuhotelAdminPage;
  let fixture: ComponentFixture<MenuhotelAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuhotelAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuhotelAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
