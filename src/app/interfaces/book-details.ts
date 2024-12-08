import {Year} from "./year";

export interface BookDetails {
  bookId?: number;
  bookTitle: string; //
  bookAuthor: string; //
  bookPublisher?: string; //
  bookDescription?: string; //
  bookYearPublished?: Year; //
  bookCover?: string;
  bookInOriginalLanguage?: string;
  bookTranslator?: string;
  bookISBN?: string;
  bookNbrOfPages?: number;
  bookLanguage?: string;
  bookVertSize?: number;
  bookHorizSize?: number;
  bookCategories?: string;
  photo?: string;
}
