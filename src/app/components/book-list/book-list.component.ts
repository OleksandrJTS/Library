import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {BookingService} from "../../services/booking.service";
import {BookBoxComponent} from "../book-box/book-box.component";
import {BookDetails} from "../../interfaces/book-details";
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    BookBoxComponent,
    NgForOf,
    MatFabButton
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BookListComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  ba: BookDetails = {
    bookId: 111,
    bookName: "The Great Gatsby",
    bookAuthor: "F. Scott Fitzgerald",
    photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`
  };

  constructor(public bookingService: BookingService) {
    let b = this.bookingService.getBookDetailsId444();
  }

  onFloatClick() {

  }
}
