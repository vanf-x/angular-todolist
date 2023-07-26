import { Component, Input } from '@angular/core';
import { Task } from '../task-interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
@Input() tasksList?:Task[];
}
