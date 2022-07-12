import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatlChatComponent } from './hatl-chat.component';

describe('HatlChatComponent', () => {
  let component: HatlChatComponent;
  let fixture: ComponentFixture<HatlChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HatlChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HatlChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
