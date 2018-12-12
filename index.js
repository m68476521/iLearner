import { Navigation } from "react-native-navigation";

import {registerScreens} from './screensNav';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'nav.welcome',
              options: {
                topBar: {
                  title: {
                    text: 'iLearning'
                  }
                }
              }
            }
          }
        ],
      }
    }
  });
});