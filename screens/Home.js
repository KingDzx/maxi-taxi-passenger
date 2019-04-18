import React, { Component } from 'react';
import { Alert, Linking, Dimensions, LayoutAnimation, Text, View, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import BottomNavigation, { IconTab, Badge} from 'react-native-material-bottom-navigation'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import Scanner from './Scanner.js'
class HomeScreen extends Component {
  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  static navigationOptions = {
    title: 'Home',
  };
  
  tabs = [
    {
      key: 'Home',
      label: 'Scanner',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'qrcode'
    },
    {
      key: 'Wallet',
      label: 'Wallet',
      barColor: '#00695C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'wallet'
    },
    {
      key: 'History',
      label: 'History',
      barColor: '#6A1B9A',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'history'
    },
    {
      key: 'Settings',
      label: 'Settings',
      barColor: '#1565C0',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'settings'
    }
  ]

  state = {
    activeTab: this.tabs[0].key
  }

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <IconTab
      isActive={isActive}
      showBadge={tab.key === 'History'}
      renderBadge={() => <Badge>2</Badge>}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

  handleTabPress = (newTab, oldTab) => {
    const {navigate} = this.props.navigation;
    navigate(newTab.key);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Scanner />
        </View>
        <BottomNavigation
          tabs={this.tabs}
          activeTab={this.state.activeTab}
          renderTab={this.renderTab}
          onTabPress={this.handleTabPress}
          useLayoutAnimation
        />
      </View>
    )
  }
}
  
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 550,
  },
});
export default HomeScreen