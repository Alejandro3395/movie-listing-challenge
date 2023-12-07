import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'
import {MatChipsModule} from '@angular/material/chips'
import { MovieListingService } from './shared/services/movie-listing.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-listing-challenge';
  sortingOptions = [
    {
      label: 'Title',
      value: 'title'
    },
    {
      label: 'Released date',
      value: 'released date'
    }
  ]

  constructor(private movieListingService: MovieListingService, private router: Router) {}

  onChange = (change: any) => {
    this.movieListingService.sortBy.set(change.value)
  }
}
