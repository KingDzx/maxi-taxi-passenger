import React from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
import WalletScreen from './screens/Wallet'
import HistoryScreen from './screens/History'
import SettingsScreen from './screens/Settings'
const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  Wallet: {screen: WalletScreen},2
  History: {screen: HistoryScreen},
  Settings: {screen: SettingsScreen},
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}