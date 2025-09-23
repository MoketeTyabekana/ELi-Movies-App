export interface ButtonProps {
  title?: string;
  onPress?: () => void;
}

export interface MovieProps {
   Title?: string;
  Year?: string;
  imdbID?: string;
  Type?: string;
  Poster?: string;
  Plot?: string;
  Genre?:string
  onPress?: () => void;
}
