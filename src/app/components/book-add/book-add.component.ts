import {Component} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

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
  bookData = {
    title: '',
    author: '',
    description: ''
  };

  constructor(
    public dialogRef: MatDialogRef<BookAddComponent>
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.bookData.title && this.bookData.author) {
      this.dialogRef.close(this.bookData);
    }
  }
}
