import Category from '../models/Category';

export const CATEGORIES = [
  new Category('c1', 'Italian', require('../assets/categories/italian.jpg'), 'black'),
  new Category('c2', 'Quick & Easy', require('../assets/categories/quickNeasy.jpg'), 'white'),
  new Category('c3', 'Hamburgers', require('../assets/categories/hamburger.jpg'), 'white'),
  new Category('c4', 'German', require('../assets/categories/german.jpg'), 'black'),
  new Category('c5', 'Light & Lovely', require('../assets/categories/light.jpg'), 'black'),
  new Category('c6', 'Exotic', require('../assets/categories/exotic.jpg'), 'white'),
  new Category('c7', 'Breakfast', require('../assets/categories/breakfast.jpg'), 'white'),
  new Category('c8', 'Asian', require('../assets/categories/asia.jpg'), 'white'),
  new Category('c9', 'French', require('../assets/categories/French.jpg'), 'white'),
  new Category('c10', 'Summer', require('../assets/categories/summer.jpg'), 'black')
];

