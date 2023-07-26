import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksInputBarComponent } from './tasks-input-bar.component';

describe('TasksInputBarComponent', () => {
  let component: TasksInputBarComponent;
  let fixture: ComponentFixture<TasksInputBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksInputBarComponent]
    });
    fixture = TestBed.createComponent(TasksInputBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
