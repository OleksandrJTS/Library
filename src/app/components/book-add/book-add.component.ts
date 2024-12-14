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
import {ChangeDetectorRef} from '@angular/core';
import {ISBN} from "../../interfaces/isbn";

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
  readonly isbns: ISBN[] = [];
  languages: string[] = [];
  coverTypes = ['М\'яка', 'Тверда'];
  categories: string[] = [];

  addIsbn(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      // ISBN-13 format validation: 13 digits with optional hyphens
      const isbnRegex = /^(?:\d+-?){12}\d$/;
      const isbn10Regex = /^(?:\d+-?){9}[\dX]$/;

      // Remove hyphens for validation
      const rawDigits = value.replace(/-/g, '');

      if (isbnRegex.test(value) || isbn10Regex.test(value)) {
        const isbnObject: ISBN = {
          value: value,
          type: rawDigits.length === 10 ? 'ISBN-10' : 'ISBN-13',
          rawDigits: rawDigits,
          isValid: true
        };

        if (!this.isbns.some(existingIsbn => existingIsbn.rawDigits === rawDigits)) {
          this.isbns.push(isbnObject);
        }
      }
    }

    // Clear the input
    event.chipInput!.clear();
  }

  filteredCoverTypes(value: string | undefined): string[] {
    const filterValue = (value || '').toLowerCase();
    return this.coverTypes.filter(type => type.toLowerCase().includes(filterValue));
  }

  validateBookCover(value: string | undefined): void {
    if (value === undefined) return;

    // Trim the value to remove any whitespace
    const trimmedValue = value.trim();

    const isValidOption = this.coverTypes.some(type =>
      type === trimmedValue // Exact match only
    );

    if (!isValidOption) {
      setTimeout(() => {
        this.bookData.bookCover = '';
      });
    }
  }

  addYear(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add the year
    if (value) {
      const yearNum = parseInt(value, 10);
      if (!isNaN(yearNum) && yearNum >= 1900 && yearNum <= 2025) {
        const yearString = yearNum.toString(); // Convert to string to remove leading zeros
        this.years.update(years => years.some(y => y.year === yearString) ?
          years : [...years, { year: yearString as Year['year'] }]);
      }
    }

    event.chipInput!.clear();
  }

  editYear(year: Year, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.removeYear(year);
      return;
    }

    const yearNum = parseInt(value, 10);
    if (!isNaN(yearNum) && yearNum >= 1900 && yearNum <= 2025) {
      this.years().some(y => y !== year && y.year === value) ? this.removeYear(year) :
        this.years.update(years =>
          years.map(y => y === year ? { year: value as Year['year'] } : y)
        );
    }
  }

  removeYear(year: Year): void {
    this.years.update(years => years.filter(y => y !== year));
  }

  editISBN(isbn: ISBN, event: MatChipEditedEvent): void {
    const value = event.value.trim();

    if (!value) {
      this.removeISBN(isbn);
      return;
    }

    const index = this.isbns.indexOf(isbn);
    const rawDigits = value.replace(/-/g, '');

    const isbnRegex = /^(?:\d+-?){12}\d$/;
    const isbn10Regex = /^(?:\d+-?){9}[\dX]$/;

    if ((isbnRegex.test(value) || isbn10Regex.test(value)) && index >= 0) {
      const newIsbnObject: ISBN = {
        value: value,
        type: rawDigits.length === 10 ? 'ISBN-10' : 'ISBN-13',
        rawDigits: rawDigits,
        isValid: true
      };

      this.isbns[index] = newIsbnObject;
    }
  }

  removeISBN(isbn: ISBN): void {
    const index = this.isbns.indexOf(isbn);
    if (index >= 0) {
      this.isbns.splice(index, 1);
    }
  }

  addCategory(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.categories.push(value);
      this.bookData.bookCategories = this.categories.join(', ');
    }

    event.chipInput.clear();
  }

  removeCategory(category: string): void {
    const index = this.categories.indexOf(category);
    if (index >= 0) {
      this.categories = this.categories.filter(c => c !== category);
      this.bookData.bookCategories = this.categories.join(', ');
      this.cdr.detectChanges();
    }
  }

  editCategory(category: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.removeCategory(category);
      return;
    }

    const index = this.categories.indexOf(category);
    if (index >= 0) {
      this.categories = this.categories.map(c => c === category ? value : c);
      this.bookData.bookCategories = this.categories.join(', ');
      this.cdr.detectChanges();
    }
  }

  addLanguage(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.languages.push(value);
      this.bookData.bookLanguage = this.languages.join(', ');
      this.cdr.detectChanges();
    }
    event.chipInput!.clear();
  }

  removeLanguage(language: string): void {
    const index = this.languages.indexOf(language);
    if (index >= 0) {
      this.languages.splice(index, 1);
      this.bookData.bookLanguage = this.languages.join(', ');
      this.cdr.detectChanges();
    }
  }

  editLanguage(language: string, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.removeLanguage(language);
      return;
    }
    const index = this.languages.indexOf(language);
    if (index >= 0) {
      this.languages[index] = value;
      this.bookData.bookLanguage = this.languages.join(', ');
      this.cdr.detectChanges();
    }
  }

  constructor(
    public dialogRef: MatDialogRef<BookAddComponent>,
    private cdr: ChangeDetectorRef
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.bookData.bookTitle) {
      this.dialogRef.close(this.bookData);
    }
  }
}
