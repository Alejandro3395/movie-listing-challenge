import { Component, OnInit, Signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/models/movie.model';
import { Observable, map, tap } from 'rxjs';
import { MovieListingService } from '../shared/services/movie-listing.service';
import { CommonModule } from '@angular/common';
import { WatchlistManagerService } from '../shared/services/watchlist-manager.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FormatMovieDurationPipe } from '../shared/pipe/format-movie-duration.pipe';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormatMovieDurationPipe,
    MatDividerModule
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit{
  movie$!: Observable<Movie>;
  isOnWatchList!: Signal<boolean>
  safeUrl!: SafeResourceUrl;

  private movie!: Movie;

  constructor(
    protected watchlistManagerService: WatchlistManagerService,
    private activatedRoute: ActivatedRoute,
    private movieListingService: MovieListingService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.movie$ = this.activatedRoute.params.pipe(
      map((params) =>  {
        const movieFound = this.movieListingService.moviesData.find((movie) => params['movieTitle'] === movie.title )
        return movieFound as Movie
      }),
      tap(movie => {
        this.movie = movie;
        this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(movie.trailerLink)
      })
    )

    this.isOnWatchList = computed(() => this.watchlistManagerService.watchlist().includes(this.movie.title))

  }

}
