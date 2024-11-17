import {Routes} from '@angular/router';
import {BookListComponent} from "./components/book-list/book-list.component";
import {BookDetailsComponent} from "./components/book-details/book-details.component";

export const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: '', redirectTo: '/books', pathMatch: 'full'}, // Redirect empty path to books
  {path: 'details/:bookId', component: BookDetailsComponent, title: 'Book details'},
];
