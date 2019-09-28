import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
export const { width: SCREEN_WIDTH } = Dimensions.get('window');

import PlasticIcon from '../../icons/trashTypes/PlasticIcon.svg';
import LampIcon from '../../icons/trashTypes/LampIcon.svg';
import DangerousIcon from '../../icons/trashTypes/DangerousIcon.svg';
import PaperIcon from '../../icons/trashTypes/PaperIcon.svg';
import MetalIcon from '../../icons/trashTypes/MetalIcon.svg';
import GlassIcon from '../../icons/trashTypes/GlassIcon.svg';
import ClothesIcon from '../../icons/trashTypes/ClothesIcon.svg';
import OthersIcon from '../../icons/trashTypes/OthersIcon.svg';
import TechnicsIcon from '../../icons/trashTypes/TechnicsIcon.svg';

import CoinIcon from '../../icons/coins.svg';
import BuildingIcon from '../../icons/building.svg';

const trashTypes = [
  {
    icon: PaperIcon,
  },
  {
    icon: MetalIcon,
  },
  {
    icon: GlassIcon,
  },
  {
    icon: PlasticIcon,
  },
  {
    icon: LampIcon,
  },
  {
    icon: DangerousIcon,
  },
  {
    icon: ClothesIcon,
  },
  {
    icon: TechnicsIcon,
  },
  {
    icon: OthersIcon,
  },
];

export default class TrashDeliverySlideUp extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.titleText}>Заказ на вывоз мусора</Text>
        <ScrollView
          contentContainerStyle={styles.row}
          horizontal={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          {trashTypes.map(type => (
            <View style={styles.iconContainer}>
              <type.icon width={SCREEN_WIDTH / 5.5} height={SCREEN_WIDTH / 5.5}/>
            </View>
          ))}
        </ScrollView>
        <View style={styles.container}>
          <View style={styles.infoBlock}>
            <CoinIcon width={30} height={30}/>
            <Text style={styles.infoText}>Количество баллов</Text>
          </View>
          <View style={styles.infoBlock}>
            <BuildingIcon width={30} height={30}/>
            <Text style={styles.infoText}>Адрес</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => {}}
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                Маршрут
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    color: '#4BB462',
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 24,
    fontWeight: '700',
  },
  container: {
    marginLeft: 16,
    marginRight: 16,
    height: SCREEN_WIDTH * 0.4,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: SCREEN_WIDTH / 5,
  },
  iconContainer: {
    height: SCREEN_WIDTH / 3,
    marginLeft: 10,
  },
  icon: {
    flex: 1,
    width: SCREEN_WIDTH / 5,
    height: SCREEN_WIDTH / 5,
  },
  infoBlock: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 24
  },
  button: {
    backgroundColor: '#4BB462',
    width: 200,
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1.5,
    marginRight: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
