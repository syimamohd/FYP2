import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuspaPage } from './menuspa.page';

describe('MenuspaPage', () => {
  let component: MenuspaPage;
  let fixture: ComponentFixture<MenuspaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuspaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuspaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
