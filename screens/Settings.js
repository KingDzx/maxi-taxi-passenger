import React from 'react'
import { Text, Button, View } from 'react-native';
import BottomNavigation, { IconTab, Badge} from 'react-native-material-bottom-navigation'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
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
export default SettingsScreen