import { Component, inject } from '@angular/core';
import { MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule
  ]
})
export class ContactFormComponent {
  dialogRef = inject(MatDialogRef<ContactFormComponent>);
  feedback: string = '';
  email: string = 'sashko.martynenko&#64;gmail.com';

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.feedback.trim()) {
      console.log('Feedback submitted:', this.feedback);
      this.dialogRef.close(this.feedback);
    }
  }
}
