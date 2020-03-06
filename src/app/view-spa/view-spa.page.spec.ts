import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewSpaPage } from './view-spa.page';

describe('ViewSpaPage', () => {
  let component: ViewSpaPage;
  let fixture: ComponentFixture<ViewSpaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
