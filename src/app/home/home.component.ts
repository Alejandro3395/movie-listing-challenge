import { Component } from '@angular/core';
import { MovieThumbnailComponent } from "./movie-thumbnail/movie-thumbnail.component";
import { MovieListingService } from '../shared/services/movie-listing.service';
import { Movie } from '../shared/models/movie.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [MovieThumbnailComponent, CommonModule]
})
export class HomeComponent {

  constructor(protected movieListingService: MovieListingService) {}
}
