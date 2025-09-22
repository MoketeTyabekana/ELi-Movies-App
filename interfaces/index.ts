import { ReactNode } from 'react';
export interface ButtonProps {
  title?: string;
  onPress?: () => void;
}



export interface MovieProps {
  image: ReactNode;
  onPress?: () => void;
}
