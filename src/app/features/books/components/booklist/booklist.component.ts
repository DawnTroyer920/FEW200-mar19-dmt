import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BookItem } from '../../models';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Nice!
})
export class BooklistComponent implements OnInit {

  @Input() books: BookItem[];

  constructor() { }

  ngOnInit() {
  }

}
