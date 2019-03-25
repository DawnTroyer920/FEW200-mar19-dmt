import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BookentryComponent } from './components/bookentry/bookentry.component';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [BooksComponent, BooklistComponent, BookentryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('booksFeature', reducers)
  ],
  exports: [BooksComponent]
})
export class BooksModule { }
