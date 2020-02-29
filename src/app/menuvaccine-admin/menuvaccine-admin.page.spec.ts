import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuvaccineAdminPage } from './menuvaccine-admin.page';

describe('MenuvaccineAdminPage', () => {
  let component: MenuvaccineAdminPage;
  let fixture: ComponentFixture<MenuvaccineAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuvaccineAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuvaccineAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
