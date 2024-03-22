// src/model/quote.model.ts

export interface ChuckNorrisQuote {
    id: string; // Unique identifier for the quote
    value: string; // The text of the Chuck Norris quote
    categories: string[]; // Categories associated with the quote (e.g., 'animal', 'food', etc.)
  }
  