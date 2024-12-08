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
import {MatTooltip} from "@angular/material/tooltip";
import {MatAutocompleteModule, MatAutocomplete} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatDialogContent,
    MatDialogActions, MatDialogTitle, NgIf, MatChipGrid, NgFor, MatChipsModule, MatIconModule, MatTooltip,
    MatAutocompleteModule, MatRadioModule
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
  coverTypes = ['М\'яка', 'Тверда'];

  filteredCoverTypes(value: string | undefined): string[] {
    const filterValue = (value || '').toLowerCase();
    return this.coverTypes.filter(type => type.toLowerCase().includes(filterValue));
  }

  clearBookCover(autocomplete: MatAutocomplete): void {
    this.bookData.bookCover = '';
    if (autocomplete) {
      autocomplete.options.forEach(option => option.deselect());
    }
  }

  addYear(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add the year
    if (value) {
      const yearNum = parseInt(value, 10);
      if (!isNaN(yearNum) && yearNum >= 1900 && yearNum <= 2025) {
        this.years.update(years => years.some(y => y.year === value) ?
          years : [...years, { year: value as Year['year'] }]);
      }
    }

    event.chipInput!.clear();
  }

  remove(year: Year): void {
    this.years.update(years => years.filter(y => y !== year));
  }

  edit(year: Year, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(year);
      return;
    }

    const yearNum = parseInt(value, 10);
    if (!isNaN(yearNum) && yearNum >= 1900 && yearNum <= 2025) {
      this.years().some(y => y !== year && y.year === value) ? this.remove(year) :
        this.years.update(years =>
          years.map(y => y === year ? { year: value as Year['year'] } : y)
        );
    }
  }

  constructor(public dialogRef: MatDialogRef<BookAddComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.bookData.bookTitle) {
      this.dialogRef.close(this.bookData);
    }
  }
}
