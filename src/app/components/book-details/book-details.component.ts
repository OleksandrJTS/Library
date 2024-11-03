import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookingService} from "../../services/booking.service";
import {BookDetails} from "../../interfaces/book-details";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  booksService = inject(BookingService);
  bookDetails: BookDetails | undefined;

  constructor() {
    const bookDetailsId = Number(this.route.snapshot.params['bookId']);
    this.bookDetails = this.booksService.getBookDetailsById(bookDetailsId);
  }

}
