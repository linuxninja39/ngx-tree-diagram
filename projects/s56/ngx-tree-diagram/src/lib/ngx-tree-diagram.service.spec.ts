import { TestBed } from '@angular/core/testing';

import { NgxTreeDiagramService } from './ngx-tree-diagram.service';

describe('NgxTreeDiagramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTreeDiagramService = TestBed.get(NgxTreeDiagramService);
    expect(service).toBeTruthy();
  });
});
