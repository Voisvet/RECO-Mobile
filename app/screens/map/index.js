import React from 'react';
import { View, Dimensions, Text, StyleSheet, Animated } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Geolocation from '@react-native-community/geolocation';
import MapIcon from '../../icons/MapIcon';
import FilterSlideUp from "./FilterSlideUp";
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Карта',
    tabBarIcon: ({ tintColor }: { tintColor: string }) => <MapIcon strokeColor={tintColor}/>,
  };

  static defaultProps = {
    draggableRange: { top: SCREEN_HEIGHT * 0.75, bottom: 40 },
  };

  _draggedValue = new Animated.Value(40);

  state = {
    initialPosition: undefined,
    currentPosition: undefined,
  };

  componentDidMount(): void {
    Geolocation.getCurrentPosition(info => this.setState({
      initialPosition: info,
      currentPosition: info,
    }));
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
          <View style={styles.slideUpPanel}>
            <View style={styles.slideUpPanelHeader}>
              <View style={styles.slideUpHeaderBar}/>
            </View>
            <View styles={styles.slideUpContainer}>
              <FilterSlideUp />
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slideUpContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    borderColor: 'red'
  },
  slideUpPanel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 4,
  },
  slideUpPanelHeader: {
    height: 40,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 24,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  slideUpHeaderBar: {
    backgroundColor: '#4BB462',
    height: 8,
    width: '20%',
    borderRadius: 4,
  },
  textHeader: {
    fontSize: 14,
    color: '#000',
  },
});

export default MapScreen;
