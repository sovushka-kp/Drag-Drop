import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {Board} from "./models/board.model";
import {Column} from "./models/column.model";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column('Idea', [
      'Some randome idea',
    'This is another random idea',
    'create an awesome application'
    ]),
    new Column('Research', [
      'I',
      'Love',
      'You'
    ]),
    new Column('ToDo', [
      'I 2',
      'Love 2',
      'You 2'
    ]),
    new Column('Done', [
      'I 3',
      'Love 3',
      'You 3'
    ])
  ])

  ngOnInit(): void {
  }

  todo = [
    'lol',
    'loool',
    'loooool'
  ];

  done = [
    '12',
    '123',
    '1234'
  ];

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
