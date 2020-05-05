import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenugrabPage } from './menugrab.page';

describe('MenugrabPage', () => {
  let component: MenugrabPage;
  let fixture: ComponentFixture<MenugrabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugrabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenugrabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
