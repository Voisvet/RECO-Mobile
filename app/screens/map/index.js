import React from 'react';
import { View, Dimensions, StyleSheet, Animated } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Geolocation from '@react-native-community/geolocation';
import MapIcon from '../../icons/MapIcon';
import FilterSlideUp from './FilterSlideUp';
import RecyclingPointSlideUp from './RecyclingPointSlideUp';
import TrashDeliverySlideUp from './TrashDeliverySlideUp';
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Карта',
    tabBarIcon: ({ tintColor }: { tintColor: string }) => <MapIcon strokeColor={tintColor}/>,
  };

  static defaultProps = {
    draggableRange: { top: SCREEN_HEIGHT * 0.48, bottom: 40 },
  };

  _draggedValue = new Animated.Value(40);

  state = {
    initialPosition: undefined,
    currentPosition: undefined,
    recyclePoints: [],
    currentPoint: undefined,
    trashPoints: [],
    currentTrashPoint: undefined,
    mode: 'search',
  };

  updateRecyclePoints(c_lat, c_lng, trash_type): void {
    const url = `https://trash-proc-app.herokuapp.com/recycles?radius=40000.0&c_lat=${c_lat}&c_lng=${c_lng}${trash_type ? `trash_types=${trash_type}` : ''}`;
    console.log(url);
    fetch(url,
    {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => this.setState({recyclePoints: result.result}));
  }

  updateTrashPoints(c_lat, c_lng, trash_type): void {
    const url = `https://trash-proc-app.herokuapp.com/trashpoints?radius=40000.0&c_lat=${c_lat}&c_lng=${c_lng}${trash_type ? `trash_types=${trash_type}` : ''}`;
    fetch(url,
      {
        method: 'GET',
      })
      .then(response => response.json())
      .then(result => this.setState({trashPoints: result.result}));
  }

  setCurrentPoint(point, mode) {
    console.log(mode, point);
    this.setState({
      currentPoint: point,
      mode,
    });
    this._panel.show();
  }

  onReset = (position) => {
    if (position === 40) {
      this.setState({
        currentPoint: undefined,
        mode: 'search',
      });
      this._panel.hide();
    }
    return true;
  }

  componentDidMount(): void {
    Geolocation.getCurrentPosition(info => {
      this.setState({
        initialPosition: info,
        currentPosition: info,
      });
      this.updateRecyclePoints(info.coords.latitude, info.coords.longitude);
      this.updateTrashPoints(info.coords.latitude, info.coords.longitude);
    });
    Geolocation.watchPosition(info => this.setState({currentPosition: info}));
  }


  render() {
    const height = this.state.mode === 'search' ? SCREEN_HEIGHT * 0.75 : SCREEN_HEIGHT * 0.48;

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
          {this.state.trashPoints.map(point => (
            <Marker
              onPress={() => this.setCurrentPoint(point, 'trash')}
              key={'trash' + point.id.toString()}
              pinColor={'blue'}
              coordinate={{
                latitude: point.pos_lat,
                longitude: point.pos_lng,
              }}
            />
          ))}
          {this.state.recyclePoints.map(point => (
            <Marker
              onPress={() => this.setCurrentPoint(point, 'recycling')}
              key={'recycle' + point.id.toString()}
              pinColor={'red'}
              coordinate={{
                latitude: point.pos_lat,
                longitude: point.pos_lng,
              }}
            />
          ))}
        </MapView>}
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={{
            ...this.props.draggableRange,
            top: height,
          }}
          animatedValue={this._draggedValue}
          onMomentumDragEnd={this.onReset}
          onBackButtonPress={() => this.onReset(40)}
          height={height}
          friction={0.5}
        >
          <View style={styles.slideUpPanel}>
            <View style={styles.slideUpPanelHeader}>
              <View style={styles.slideUpHeaderBar}/>
            </View>
            <View styles={styles.slideUpContainer}>
              {this.state.mode === 'recycling' && <RecyclingPointSlideUp point={this.state.currentPoint} />}
              {this.state.mode === 'trash' && <TrashDeliverySlideUp point={this.state.currentPoint} />}
              {this.state.mode === 'search' && <FilterSlideUp />}
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
    borderColor: 'red',
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
