import { Component, OnInit, Input } from '@angular/core';
import { ToDoItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items: ToDoItem[];

  constructor() { }

  ngOnInit() {
  }

}
