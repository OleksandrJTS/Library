import {Component, Input} from '@angular/core';
import {BookDetails} from "../../interfaces/book-details";
import {RouterLink} from "@angular/router";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader,
        MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton, MatMiniFabButton} from "@angular/material/button";
import {SlicePipe} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";
import {MaxStringPipe} from "../../pipes/max-string.pipe";

@Component({
  selector: 'app-book-box',
  standalone: true,
  imports: [
    RouterLink, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions, MatIcon,
    MatButton, SlicePipe, MatTooltip, MatCardXlImage, MatCardTitleGroup, MatFabButton, MatMiniFabButton, MaxStringPipe
  ],
  templateUrl: './book-box.component.html',
  styleUrl: './book-box.component.scss'
})

export class BookBoxComponent {
  @Input() bookDetails!: BookDetails;
}
