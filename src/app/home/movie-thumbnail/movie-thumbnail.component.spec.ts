import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieThumbnailComponent } from './movie-thumbnail.component';
import { Movie } from '../../shared/models/movie.model';

describe('MovieThumbnailComponent', () => {
  let component: MovieThumbnailComponent;
  let fixture: ComponentFixture<MovieThumbnailComponent>;
  const movieMock: Movie = {
    title: 'movie-test',
    rating: 6,
    durationInMin: 120,
    description: 'a test movie',
    genre: ['Action'],
    releasedDate: new Date(2010, 4, 23),
    trailerLink: 'link-test',
    thumbnail: 'test.png'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieThumbnailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieThumbnailComponent);
    component = fixture.componentInstance;
    component.movie = movieMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test @Input movie ', () => {
    expect(component.movie).withContext('movie @Input should be defi').toBeDefined()
  });

});
