import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {BookBoxComponent} from "../book-box/book-box.component";
import {BookingService} from "../../services/booking.service";
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    NgForOf, BookBoxComponent, MatFabButton
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  constructor(public bookingService: BookingService) {}

}
