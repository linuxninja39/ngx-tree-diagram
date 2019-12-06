import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTreeDiagramComponent } from './ngx-tree-diagram.component';

describe('NgxTreeDiagramComponent', () => {
  let component: NgxTreeDiagramComponent;
  let fixture: ComponentFixture<NgxTreeDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTreeDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTreeDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
