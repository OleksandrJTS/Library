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
      bookName: 'First Test Book4////////////',
      bookAuthor: 'Some Author Test Name4',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
    },
    {
      bookId: 555,
      bookName: 'First Test Book5',
      bookAuthor: 'Some Author Test Name5',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
    },
    {
      bookId: 666,
      bookName: 'First Test Book6',
      bookAuthor: 'Some Author Test Name6',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
    },
    {
      bookId: 777,
      bookName: 'First Test Book7',
      bookAuthor: 'Some Author Test Name7',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
    },
    {
      bookId: 888,
      bookName: 'First Test Book8',
      bookAuthor: 'Some Author Test Name8',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
    },
    {
      bookId: 999,
      bookName: 'First Test Book9',
      bookAuthor: 'Some Author Test Name9',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
    },
    {
      bookId: 1000,
      bookName: 'First Test Book10',
      bookAuthor: 'Some Author Test Name10',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      bookId: 1111,
      bookName: 'First Test Book11',
      bookAuthor: 'Some Author Test Name11',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
    },
    {
      bookId: 1112,
      bookName: 'First Test Book12',
      bookAuthor: 'Some Author Test Name12',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
    },
    {
      bookId: 1113,
      bookName: 'First Test Book13',
      bookAuthor: 'Some Author Test Name13',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
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