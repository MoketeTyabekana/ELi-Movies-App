export interface ButtonProps {
  title?: string;
  onPress?: () => void;
}


export interface MovieProps {
  Title?: string;
  Year?: string;
  imdbID: string;
  Type?: string;
  Poster?: string;
  Plot?: string;
  Genre?: string;
  imdbRating?: string;
  imdbVotes?: string;
  Runtime?: string;
  Director?: string;
  Actors?: string;
  Rated?: string;
  Released?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Ratings?: { Source: string; Value: string }[];
  onPress?: () => void;
}
