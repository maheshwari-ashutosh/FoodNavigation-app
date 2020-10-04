import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { CATEGORIES } from '../data/category';

const FoodOptions = (props) => {
  const category = CATEGORIES.find(item => item.id === props.navigation.getParam('id'));
  const title = category ? category.name : 'Null';
  return <View>
    <Text>FoodOptions Screen {title}!</Text>
    <Button title='Go to Options' onPress={() => {
      props.navigation.navigate({routeName: 'Details'})
    }}/>
  </View>;
};

FoodOptions.navigationOptions = (navigationData) => {
  console.log(navigationData);
  const category = CATEGORIES.find(item => item.id === navigationData.navigation.getParam('id'));
  const title = category ? category.name : 'Null';
  return {
    title,
  }
}

const styles = StyleSheet.create({

});

export default FoodOptions;
