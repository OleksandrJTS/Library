import {Routes} from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {SettingsComponent} from './components/settings/settings.component';
import {BookListComponent} from "./components/book-list/book-list.component";
import {BookDetailsComponent} from "./components/book-details/book-details.component";

export const routes: Routes = [
  {path: '', redirectTo: 'book-list', pathMatch: 'full'},
  {path: 'book-list', component: BookListComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'details/:bookId', component: BookDetailsComponent, title: 'Book details'},
];
