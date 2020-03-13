import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetRightInfoComponent } from './snippet-right-info.component';

describe('SnippetRightInfoComponent', () => {
  let component: SnippetRightInfoComponent;
  let fixture: ComponentFixture<SnippetRightInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetRightInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetRightInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
