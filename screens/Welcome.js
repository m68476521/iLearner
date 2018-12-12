
import React, {PureComponent} from 'react';
import {Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';

class Second extends PureComponent {

    static propTypes = {
        navigator: PropTypes.object,
        componentId: PropTypes.string
    }

    constructor(props) {
        super(props)

        this.pushViewPostScreen = this.pushViewPostScreen.bind(this);
    }

    pushViewPostScreen() {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'nav.second',
                passProps: {
                    text: 'Some props are passing'
                },
                options: {
                    topBar: {
                        title:{
                            text: 'Second'
                        }
                    }
                }
            }
        });
    }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>
             <Text>Welcome Screen</Text>
           <Button
               title="Go to second screen"
               onPress={this.pushViewPostScreen}
             />
           </View>
    );
  }
}

export default Second;