import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuspaAdminPage } from './menuspa-admin.page';

describe('MenuspaAdminPage', () => {
  let component: MenuspaAdminPage;
  let fixture: ComponentFixture<MenuspaAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuspaAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuspaAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
