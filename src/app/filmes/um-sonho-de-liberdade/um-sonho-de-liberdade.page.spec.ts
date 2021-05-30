import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UmSonhoDeLiberdadePage } from './um-sonho-de-liberdade.page';

describe('UmSonhoDeLiberdadePage', () => {
  let component: UmSonhoDeLiberdadePage;
  let fixture: ComponentFixture<UmSonhoDeLiberdadePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UmSonhoDeLiberdadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UmSonhoDeLiberdadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
