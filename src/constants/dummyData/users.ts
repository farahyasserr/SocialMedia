import {ImageSourcePropType} from 'react-native/types';
import images from '../../assets/images';

type user = {
  id: number;
  name: string;
  image: ImageSourcePropType;
};

const users: user[] = [
  {
    id: 1,
    name: 'Farah Yasser',
    image: images.homeScreen.card1,
  },
  {
    id: 2,
    name: 'Ahmed Zaki',
    image: images.homeScreen.card2,
  },
  {
    id: 3,
    name: 'Mark Jhose',
    image: images.homeScreen.card3,
  },
  {
    id: 4,
    name: 'John cavi',
    image: images.homeScreen.card4,
  },
];

export default users;
