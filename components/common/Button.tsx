import { styles } from '@/styles/startScreen';
import React from 'react';
import { ButtonProps, Text, TouchableOpacity } from 'react-native';



export default function Button({ title, onPress }: ButtonProps) {
  return (
      <TouchableOpacity style={styles.button} onPress={onPress} >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
  );
}
