import React, {PureComponent} from 'react';
import {Text, View, Button, TextInput } from 'react-native';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';

class ThirdScreen extends PureComponent {
  static propTypes = {
    componentId: PropTypes.string
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Add Post'
        },
        rightButtons: [{
          id: 'saveButton',
          text: 'Save',
          enabled: false
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

  onChangeText(text) {
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [{
          id: 'saveBtn',
          text: 'Save',
          enabled: !!text
        }]
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
          <Text>Third Screen</Text>
          <Button
            title="Third Screen"
            onPress={() => console.log("Pressing")}
            />
          <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            value="Start writing to enable the save button"
            onChangeText={this.onChangeText}
          />
      </View>
    );
  }
}

export default ThirdScreen;