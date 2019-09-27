import React from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    return (
      <View
        style={{ flex: 1, height: SCREEN_HEIGHT }}
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
      </View>
    );
  }
}

export default MapScreen;
