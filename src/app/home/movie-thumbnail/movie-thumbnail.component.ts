import { Component, Input, Signal, computed } from '@angular/core';
import { Movie } from '../../shared/models/movie.model';
import { CommonModule } from '@angular/common';
import { FormatMovieDurationPipe } from "../../shared/pipe/format-movie-duration.pipe";
import { MatIconModule } from '@angular/material/icon';
import { WatchlistManagerService } from '../../shared/services/watchlist-manager.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-movie-thumbnail',
    standalone: true,
    templateUrl: './movie-thumbnail.component.html',
    styleUrl: './movie-thumbnail.component.scss',
    imports: [
      CommonModule,
      FormatMovieDurationPipe,
      MatIconModule,
      MatButtonModule
      ]
})
export class MovieThumbnailComponent {

  @Input({required: true})
  movie!: Movie;

  isOnWatchList!: Signal<boolean>

  constructor(protected watchlistManagerService: WatchlistManagerService, private router: Router) {
    this.isOnWatchList = computed(() => watchlistManagerService.watchlist().includes(this.movie.title))
  }

  goToMovieDetails = () => {
    this.router.navigate([this.movie.title, 'details']);
  }

}
