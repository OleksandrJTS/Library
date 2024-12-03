import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {BookBoxComponent} from "../book-box/book-box.component";
import {BookingService} from "../../services/booking.service";
import {MatFabButton} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {BookAddComponent} from "../book-add/book-add.component";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    NgForOf, BookBoxComponent, MatFabButton, MatIconModule, BookAddComponent
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  constructor(
    public bookingService: BookingService,
    private dialog: MatDialog
  ) {}

  openAddBookDialog(): void {
    const dialogRef = this.dialog.open(BookAddComponent, {
      width: '90rem',
      maxHeight: '95vh',
      // autoFocus: 'first-header'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog closed with result:', result);
      }
    });
  }
}
