import React from 'react'
import { Text, Button, View, Image, StyleSheet } from 'react-native';
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
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'N/A');
    const photoUrl = navigation.getParam('photoUrl', 'N/A');
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
          <Text>Name: {name}</Text>
          <Image style={styles.image} source={{ uri: photoUrl }} />
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})
export default SettingsScreen