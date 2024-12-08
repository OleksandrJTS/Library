import {Component, inject, signal} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {BookDetails} from '../../interfaces/book-details';
import {NgFor, NgIf} from "@angular/common";
import {MatChipEditedEvent, MatChipGrid, MatChipInputEvent, MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Year} from "../../interfaces/year";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatDialogContent,
    MatDialogActions, MatDialogTitle, NgIf, MatChipGrid, NgFor, MatChipsModule, MatIconModule
  ],
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})

export class BookAddComponent {
  bookData: BookDetails = {
    bookId: 0,
    bookTitle: '',
    bookAuthor: '',
    bookDescription: '',
    bookPublisher: '',
    bookCover: '',
    bookInOriginalLanguage: '',
    bookTranslator: '',
    bookISBN: '',
    bookNbrOfPages: 0,
    bookLanguage: '',
    bookVertSize: 0,
    bookHorizSize: 0,
    bookCategories: '',
    bookYearPublished: { year: '' },
    photo: ''
  }

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  readonly years = signal<Year[]>([]);
  readonly announcer = inject(LiveAnnouncer);

  remove(year: Year): void {
    this.years.update(years => {
      const index = years.indexOf(year);
      if (index < 0) {
        return years;
      }

      years.splice(index, 1);
      this.announcer.announce(`Removed ${year.year}`);
      return [...years];
    });
  }

  edit(year: Year, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove year if it no longer has a name
    if (!value) {
      this.remove(year);
      return;
    }

    const yearNum = parseInt(value, 10);
    if (!isNaN(yearNum) && yearNum >= 1900 && yearNum <= 2024) {
      // Edit existing year with proper type assertion
      this.years.update(years => {
        const index = years.indexOf(year);
        if (index >= 0) {
          years[index].year = value as Year['year'];
          return [...years];
        }
        return years;
      });
    }
  }

  constructor(
    public dialogRef: MatDialogRef<BookAddComponent>
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.bookData.bookTitle && this.bookData.bookAuthor) {
      this.dialogRef.close(this.bookData);
    }
  }

  addYear(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add the year
    if (value) {
      const yearNum = parseInt(value, 10);
      if (!isNaN(yearNum) && yearNum >= 1900 && yearNum <= 2024) {
        // Convert to string literal type by asserting it matches the Year interface
        const yearStr = value as Year['year'];
        const newYear = { year: yearStr };
        this.years.update(years => [...years, newYear]);
        this.bookData.bookYearPublished = newYear;
      }
    }

    // Clear the input value
    event.chipInput!.clear();
  }
}
