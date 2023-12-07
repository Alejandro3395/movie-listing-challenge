import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  sortByRealeasedDate = (movies: Movie[]) => {
    return movies.sort((a: Movie, b: Movie) => (new Date(b.releasedDate)).setHours(0, 0, 0, 0) - (new Date(a.releasedDate)).setHours(0, 0, 0, 0))
  }

  sortByTitle = (movies: Movie[]) => {
    return movies.sort((a: Movie, b: Movie) => a.title.localeCompare(b.title))

  }
}
