import { Injectable } from '@angular/core';
import {BookDetails} from "../interfaces/book-details";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  protected booksDetailsList: BookDetails[] = [
    {
      bookId: 111,
      bookName: 'First Test Book1',
      bookAuthor: 'Some Author Test Name1',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      bookId: 222,
      bookName: 'First Test Book2',
      bookAuthor: 'Some Author Test Name2',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
    },
    {
      bookId: 333,
      bookName: 'First Test Book3',
      bookAuthor: 'Some Author Test Name3',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
    },
    {
      bookId: 444,
      bookName: 'First Test Book4',
      bookAuthor: 'Some Author Test Name4',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
    },
    {
      bookId: 555,
      bookName: 'First Test Book5',
      bookAuthor: 'Some Author Test Name5',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
    },
  ];

  getAllBooksDetails(): BookDetails[] {
    return this.booksDetailsList;
  }

  getBookDetailsById(bookID: number): BookDetails | undefined {
    return this.booksDetailsList.find((booksDetailsList)=> booksDetailsList.bookId === bookID);
  }
  constructor() { }
}
