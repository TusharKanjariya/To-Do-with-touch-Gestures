import { TestBed } from '@angular/core/testing';

import { TodoManageService } from './todo-manage.service';

describe('TodoManageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoManageService = TestBed.get(TodoManageService);
    expect(service).toBeTruthy();
  });
});
