import React from 'react';
import { View, Dimensions, Text, StyleSheet, Animated } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Geolocation from '@react-native-community/geolocation';
import MapIcon from './MapIcon';
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Карта',
    tabBarIcon: ({ tintColor }: { tintColor: string }) => <MapIcon strokeColor={tintColor}/>,
  };

  static defaultProps = {
    draggableRange: { top: SCREEN_HEIGHT * 0.75, bottom: 50 },
  };

  _draggedValue = new Animated.Value(50);

  state = {
    initialPosition: undefined,
    currentPosition: undefined,
  };

  componentDidMount(): void {
    Geolocation.getCurrentPosition(info => this.setState({initialPosition: info}));
    Geolocation.watchPosition(info => this.setState({currentPosition: info}));
  }

  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: 'white' }}
      >
        {this.state.initialPosition && <MapView
          provider={PROVIDER_GOOGLE}
          style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
          initialRegion={{
            latitude: this.state.initialPosition.coords.latitude,
            longitude: this.state.initialPosition.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          {this.state.currentPosition && <Marker
            pinColor={'green'}
            coordinate={{
              latitude: this.state.currentPosition.coords.latitude,
              longitude: this.state.currentPosition.coords.longitude,
            }}
          />}
        </MapView>}
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={this.props.draggableRange}
          animatedValue={this._draggedValue}
          snappingPoints={[360]}
          height={SCREEN_HEIGHT * 0.75}
          friction={0.5}
        >
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <Text style={styles.textHeader}>Sliding Up Panel</Text>
            </View>
            <View styles={styles.container}>
              <Text>Bottom sheet content</Text>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  panelHeader: {
    height: 50,
    backgroundColor: '#b197fc',
    justifyContent: 'flex-end',
    padding: 24,
  },
  textHeader: {
    fontSize: 14,
    color: '#FFF',
  },
});

export default MapScreen;
