import React, {PureComponent} from 'react';
import {Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

class ThirdScreen extends PureComponent {

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Add Post'
        },
        rightButtons: [{
          id: 'saveButton',
          text: 'Save'
        }],
        leftButtons: [{
          id: 'cancelButton',
          text: 'Cancel'
        }]
      }
    };
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'cancelButton') {
      Navigation.dissModal(this.props.componentId);
    } else if (buttonId === 'saveButton') {
      alert('Save Button');
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'purple' }}>
          <Text>Third Screen</Text>
          <Button
               title="Third Screen"
               onPress={() => console.log("Pressing")}
            />
      </View>
    );
  }
}

export default ThirdScreen;