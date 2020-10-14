import React from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';

const Card = (props) => {
  return <TouchableOpacity style={{...styles.card, ...props.style}} onPress={props.onPress}>
    {props.children}
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    // elevation: 30,
    backgroundColor: '#fff',
  }
});

export default Card;