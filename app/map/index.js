import React from 'react';
import { View, Dimensions, Text, StyleSheet, Animated } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import SlidingUpPanel from 'rn-sliding-up-panel';
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  static defaultProps = {
    draggableRange: { top: SCREEN_HEIGHT * 0.75, bottom: 50 },
  };

  _draggedValue = new Animated.Value(50);

  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: 'white' }}
      >
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
          initialRegion={{
            latitude: 28.623999,
            longitude: 77.383707,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            pinColor={'green'}
            coordinate={{ latitude: 77.383707, longitude: 77.383707 }}
          />
          <Marker
            pinColor={'blue'}
            coordinate={{ latitude: 28.469619, longitude: 77.038272 }}
          />
        </MapView>
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
