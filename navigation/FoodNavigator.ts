import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import FoodCategories from '../screens/FoodCategories';
import FoodOptions from '../screens/FoodOptions';
import FoodDetails from '../screens/FoodDetails';
import Colors from '../Constants/Colors';

const FoodNavigator = createStackNavigator(
  {
    Categories: {
      screen: FoodCategories,
      navigationOptions: {
        title: 'Food Categories'
      }
    },
    Options: {
      screen: FoodOptions,
    },
    Details: FoodDetails,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTitleStyle: {
        // textAlign: 'center',
      },
      headerTintColor: 'white',
    },
  },
);

export default createAppContainer(FoodNavigator);
