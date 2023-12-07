import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMovieDuration',
  standalone: true
})
export class FormatMovieDurationPipe implements PipeTransform {

  transform(movieDurationinMin: number): string {
    const hours = Math.floor(movieDurationinMin / 60);
    const minutes = movieDurationinMin % 60;
    return (hours ? `${hours}h` : '') + (hours ? ` ${minutes}m`: `${minutes}m`);
  }

}
