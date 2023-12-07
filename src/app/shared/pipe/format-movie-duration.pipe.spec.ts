import { FormatMovieDurationPipe } from './format-movie-duration.pipe';

describe('FormatMovieDurationPipe', () => {
  let pipe: FormatMovieDurationPipe;
  
  beforeEach(() => {
    pipe = new FormatMovieDurationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(' should properly transform movie duration and display hours and minutes', () => {
    const movieDuration = 134;

    expect(pipe.transform(movieDuration)).toBe('2h 14m')
  })
});
