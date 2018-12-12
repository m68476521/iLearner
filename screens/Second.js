
import React, {PureComponent} from 'react';
import {Text, View, Button } from 'react-native';

class Second extends PureComponent {

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