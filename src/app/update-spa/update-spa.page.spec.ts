import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateSpaPage } from './update-spa.page';

describe('UpdateSpaPage', () => {
  let component: UpdateSpaPage;
  let fixture: ComponentFixture<UpdateSpaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSpaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateSpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
