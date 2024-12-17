import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {BookBoxComponent} from "../book-box/book-box.component";
import {BookingService} from "../../services/booking.service";
import {MatFabButton} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {BookAddComponent} from "../book-add/book-add.component";
import {ContactFormComponent} from "../contact-form/contact-form.component";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    NgForOf, BookBoxComponent, MatFabButton, MatIconModule, BookAddComponent, ContactFormComponent
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  constructor(
    protected bookingService: BookingService,
    private dialog: MatDialog
  ) {
  }

  openAddBookDialog() {
    const dialogRef = this.dialog.open(BookAddComponent, {
      minWidth: '50rem',
      maxHeight: '95vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog closed with result:', result);
      }
    });
  }

  openContactForm() {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      minWidth: '50rem',
      maxHeight: '95vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog closed with result:', result);
      }
    });
  }
}
