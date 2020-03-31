import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateContentPage } from './update-content.page';

describe('UpdateContentPage', () => {
  let component: UpdateContentPage;
  let fixture: ComponentFixture<UpdateContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
