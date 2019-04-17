import React from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/Home.js'
import LoginScreen from './screens/Login.js'
import WalletScreen from './screens/Wallet.js'
import HistoryScreen from './screens/History.js'
import SettingsScreen from './screens/Settings.js'
const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  Wallet: {screen: WalletScreen},
  History: {screen: HistoryScreen},
  Settings: {screen: SettingsScreen},
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}