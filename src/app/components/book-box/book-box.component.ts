import {Component, Input} from '@angular/core';
import {BookDetails} from "../../interfaces/book-details";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-book-box',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './book-box.component.html',
  styleUrl: './book-box.component.css'
})
export class BookBoxComponent {
  @Input() bookDetails!: BookDetails;
}
