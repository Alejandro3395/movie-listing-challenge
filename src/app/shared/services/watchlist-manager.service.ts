import { Injectable, effect, signal } from '@angular/core';
import type { WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistManagerService {

  watchlist!: WritableSignal<string[]>;

  constructor() {
    this.watchlist = signal(this.getWatchlist());

    effect(() => {
      const watchlist = this.watchlist()
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
    })
  }

  private getWatchlist = (): string[] => {
    const storedWatchlist = localStorage.getItem('watchlist');

    return storedWatchlist ?  JSON.parse(storedWatchlist) : [];
  }

  addMovieToWatchlist = (movieTitle: string) => {
    this.watchlist.update((watchlist) => {
      watchlist.push(movieTitle)
      return [...watchlist];
    });
  }

  removeMovieFromWatchlist = (movieTitle: string) => {
    this.watchlist.update((watchlist) => {
      const movieIndex = watchlist.findIndex((title) => title === movieTitle);
      watchlist.splice(movieIndex, 1);
      return [...watchlist]
    })
  }

  clearWatchlist = () => this.watchlist.set([]);
}

