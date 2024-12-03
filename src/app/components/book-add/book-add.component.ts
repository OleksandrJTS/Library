import {Component} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {BookDetails} from '../../interfaces/book-details';

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatDialogContent,
    MatDialogActions, MatDialogTitle
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
    bookYearPublished: '',
    bookCover: '',
    bookInOriginalLanguage: '',
    bookTranslator: '',
    bookISBN: '',
    bookNbrOfPages: 0,
    bookLanguage: '',
    bookVertSize: 0,
    bookHorizSize: 0,
    bookCategories: '',
    photo: ''
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
}
