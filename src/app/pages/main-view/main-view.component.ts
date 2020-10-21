import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Column } from 'src/app/models/column.model';
import { Board } from 'src/app/models/board.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board',[
    new Column('START',[
      'Work on project 12345',
    'Function on project 2425345',
    'Data checks for 67567'
    ]),
    new Column('Working',[
      'Work on project 12345',
    'Function on project 2425345',
    'Data checks for 67567'
    ]),
    new Column('Testing',[
    'Work on project 12345',
    'Function on project 2425345',
    'Data checks for 67567'
    ]),
    new Column('Completed',[
      'Work on project 12345',
    'Function on project 2425345',
    'Data checks for 67567'
    ]),

  ])

  ngOnInit(): void {
  }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
