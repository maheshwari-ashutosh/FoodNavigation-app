import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  FlatList,
  Text,
  ListRenderItemInfo,
  ImageBackground,
} from 'react-native';
import {CATEGORIES} from '../data/category';
import {MEALS} from '../data/Meal';
import {Meal} from '../models/Meal';
import Card from '../components/Card';

const FoodOptions = (props) => {
  const category = CATEGORIES.find(
    (item) => item.id === props.navigation.getParam('id'),
  );
  const title = category ? category.name : 'Null';
  const meals = MEALS.filter((meal) => {
    return category ? meal.categoryIds.includes(category.id) : false;
  });

  const renders = (meal: ListRenderItemInfo<Meal>) => {
    return category && meal.item.categoryIds.includes(category.id) ? (
      <Card
        onPress={() => {
          props.navigation.navigate({
            routeName: 'Details',
            params: {
              id: meal.item.id,
            },
          });
        }}
        style={{
          flex: 1,
          elevation: 5,
          borderRadius: 10,
          overflow: 'hidden',
          margin: 10,
          height: 250,
        }}
      >
        <ImageBackground
          source={{uri: meal.item.imageUrl}}
          style={styles.tileBackground}
        >
          <Text style={{...styles.tileText, color: 'white'}} numberOfLines={2}>
            {meal.item.title}
          </Text>
          <View style={styles.optionDetails}>
            <Text style={styles.propertyStyle}>{meal.item.duration} minutes</Text>
            <Text style={styles.propertyStyle}>{meal.item.complexity}</Text>
            <Text style={styles.propertyStyle}>{meal.item.affordability}</Text>
          </View>
        </ImageBackground>
      </Card>
    ) : null;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={1}
        data={meals}
        renderItem={(o) => renders(o)}
      ></FlatList>
      <Button
        title='Go to Options'
        onPress={() => {
          props.navigation.navigate({routeName: 'Details'});
        }}
      />
    </View>
  );
};

FoodOptions.navigationOptions = (navigationData) => {
  console.log(navigationData);
  const category = CATEGORIES.find(
    (item) => item.id === navigationData.navigation.getParam('id'),
  );
  const title = category ? category.name : 'Null';
  return {
    title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {},
  tileText: {
    paddingVertical: 15,
    textAlign: 'center',
    fontWeight: '700',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  tileBackground: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'contain',
  },
  optionDetails: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,1)',
  },
  propertyStyle: {
    flex: 1,
    color: 'black',
    textAlign: 'center'
  }
});

export default FoodOptions;
