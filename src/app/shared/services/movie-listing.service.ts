import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Movie } from '../models/movie.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class MovieListingService {
  moviesData: Movie[] = [
    {
      title: 'Tenet',
      description: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time',
      rating: 7.8,
      durationInMin: 150,
      genre:['Action', 'Sci-Fi'],
      releasedDate: '3 september 2020',
      trailerLink: 'https://www.youtube.com/embed/LdOM0x0XDMo',
      thumbnail: 'Tenet.png'
    },
    {
      title: 'Spider-man into the Spider-verse',
      description: 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
      rating: 8.4,
      durationInMin: 117,
      genre:['Action', 'Animation', 'Adventure'],
      releasedDate: '14 december 2019',
      trailerLink: 'https://www.youtube.com/embed/tg52up16eq0',
      thumbnail: 'Spider_Man.png'
    },
    {
      title: 'Knives Out',
      description: 'A detective investigates the death of a patriarch of an eccentric, combative family.',
      rating: 7.9,
      durationInMin: 130,
      genre:['Crime', 'Comedy', 'Drama'],
      releasedDate: '27 november 2019',
      trailerLink: 'https://www.youtube.com/embed/qGqiHJTsRkQ',
      thumbnail: 'Knives_Out.png'
    },
    {
      title: 'Guardians of the galaxy',
      description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior wih plans to purge the universe.',
      rating: 8.0,
      durationInMin: 121,
      genre:['Action', 'Comedy', 'Adventure'],
      releasedDate: '1 august 2014',
      trailerLink: 'https://www.youtube.com/embed/d96cjJhvlMA',
      thumbnail: 'Guardians_of_The_Galaxy.png'
    },
    {
      title: 'Age of ultron',
      description: 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program' +
      'called Ultron, things go horribly wrong and it\'s up to Earth\'s mightiest heroes to stop the villainous Ultron ' +
      'from enacting his terrible plan.',
      rating: 7.3,
      durationInMin: 141,
      genre:['Action', 'Sci-Fi', 'Adventure'],
      releasedDate: '1 may 2015',
      trailerLink: 'https://www.youtube.com/embed/tmeOjFno6Do',
      thumbnail: 'Avengers.png'
    }
  ];

  computedMovieListing!: Signal<Movie[]>
  sortBy!: WritableSignal<sortType>
  filterText!: WritableSignal<string>;

  constructor(private utilsService: UtilsService) {

    this.sortBy = signal(undefined)
    // this.filterText = signal('');

    this.computedMovieListing = computed(() => {
      switch (this.sortBy()) {
        case 'released date':
          return utilsService.sortByRealeasedDate([...this.moviesData]);
        
        case 'title':
          return utilsService.sortByTitle([...this.moviesData]);
      
        default:
          return this.moviesData
      }

    })
  }
}

type  sortType = 'released date' | 'title' | undefined
