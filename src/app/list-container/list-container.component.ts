import { Component, OnInit } from '@angular/core';
import { Task } from '../task-interface';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css'],
})
export class ListContainerComponent implements OnInit {
  tasksList: Task[] = [
    { id: 1, value: 'desayunar manaos de uva con guaymallen de fruta', checked: false },
    { id: 2, value: 'jugar al LOL', checked: false },
    { id: 3, value: 'dormir la siesta sin alarma', checked: false },
  ];

  ngOnInit(): void {}

  generateRandomId(): number {
    return 0;
  }
}
