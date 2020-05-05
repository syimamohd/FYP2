import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuproductPage } from './menuproduct.page';

describe('MenuproductPage', () => {
  let component: MenuproductPage;
  let fixture: ComponentFixture<MenuproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuproductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
