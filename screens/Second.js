
import React, {PureComponent} from 'react';
import {Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

class Second extends PureComponent {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);

  }

  static get options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: 'addPost',
            text: 'Add'
          }
        ]
      }
    };
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'addPost') {
      this.goToAddPostModal()
    }
  }

  goToAddPostModal() {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'nav.third',
          }
        }]
      }
    })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
          <Text>Second Screen</Text>
          <Button
               title="Go to another screen11"
               onPress={() => console.log("Pressing")}
            />
      </View>
    );
  }
}

export default Second;