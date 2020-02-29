import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenugrabAdminPage } from './menugrab-admin.page';

describe('MenugrabAdminPage', () => {
  let component: MenugrabAdminPage;
  let fixture: ComponentFixture<MenugrabAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugrabAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenugrabAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
