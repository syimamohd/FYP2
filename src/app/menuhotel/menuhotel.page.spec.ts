import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuhotelPage } from './menuhotel.page';

describe('MenuhotelPage', () => {
  let component: MenuhotelPage;
  let fixture: ComponentFixture<MenuhotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuhotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuhotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
