import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('nav.welcome', () => require('./screens/Welcome').default);
  Navigation.registerComponent('nav.second', () => require('./screens/Second').default);
}