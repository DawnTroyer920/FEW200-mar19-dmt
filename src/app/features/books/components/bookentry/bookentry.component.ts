import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { AddedBook } from '../../actions/book.actions';

@Component({
  selector: 'app-bookentry',
  templateUrl: './bookentry.component.html',
  styleUrls: ['./bookentry.component.css']
})
export class BookentryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  add(booktitle: HTMLInputElement, bookauthor: HTMLInputElement, booktype: HTMLInputElement) {
    // Dispatch an action
    this.store.dispatch(new AddedBook(booktitle.value, bookauthor.value, booktype.value));
    booktitle.value = '';
    bookauthor.value = '';
    booktype.value = '';
    booktitle.focus();

  }
}
