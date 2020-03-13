import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetLeftInfoComponent } from './snippet-left-info.component';

describe('SnippetLeftInfoComponent', () => {
  let component: SnippetLeftInfoComponent;
  let fixture: ComponentFixture<SnippetLeftInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetLeftInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetLeftInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
