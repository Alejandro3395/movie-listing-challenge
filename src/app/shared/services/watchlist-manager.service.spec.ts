import { TestBed } from '@angular/core/testing';

import { WatchlistManagerService } from './watchlist-manager.service';
import { Movie } from '../models/movie.model';



describe('WatchlistManagerService', () => {
  let service: WatchlistManagerService;
  let watchlist: string[];
  const movieMock: Movie = {
    title: 'movie-test',
    rating: 6,
    durationInMin: 120,
    description: 'a test movie',
    genre: ['Action'],
    releasedDate: '23 may 2010',
    trailerLink: 'link-test',
    thumbnail: 'test.png'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchlistManagerService);
    watchlist = service.watchlist();

  });

  afterAll(() => {
    service.clearWatchlist()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialized watchlist', () => {
    expect(service.watchlist()).toBeDefined();
  })

  it('should add movie to the watchlist at the localstorage', () => {

    service.addMovieToWatchlist(movieMock.title);

    expect(watchlist.length).toBeGreaterThan(0);
  });

  it('should remove movie from the watchlist', () => {

    service.addMovieToWatchlist(movieMock.title);
    const watchlistLength = watchlist.length
    
    service.removeMovieFromWatchlist(movieMock.title)

    expect(watchlist.length).toEqual(watchlistLength - 1);
  })

});
