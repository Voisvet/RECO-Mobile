import React from 'react';
import {View, Text} from 'react-native';
import AccountIcon from "../../icons/AccountIcon";

class AccountScreen extends React.Component {
  static navigationOptions = {
    title: 'Профиль',
    tabBarIcon: ({ tintColor }: { tintColor: string }) => <AccountIcon strokeColor={tintColor}/>
  };

  render() {
    return (
      <View>
        <Text>AccountScreen</Text>
      </View>
    );
  }
}

export default AccountScreen;
