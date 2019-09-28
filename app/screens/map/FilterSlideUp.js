import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
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

const trashTypes = [
  [
    {
      title: 'Бумага',
      icon: PaperIcon,
    },
    {
      title: 'Металл',
      icon: MetalIcon,
    },
    {
      title: 'Стекло',
      icon: GlassIcon,
    },
  ],
  [
    {
      title: 'Пластик',
      icon: PlasticIcon,
    },
    {
      title: 'Лампочки',
      icon: LampIcon,
    },
    {
      title: 'Опасные',
      icon: DangerousIcon,
    },
  ],
  [
    {
      title: 'Одежда',
      icon: ClothesIcon,
    },
    {
      title: 'Бытовой',
      icon: TechnicsIcon,
    },
    {
      title: 'Иное',
      icon: OthersIcon,
    },
  ],
];

export default class FilterSlideUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Выберите категорию мусора
        </Text>
        {trashTypes.map(typesRow => (
          <View style={styles.row}>
            {typesRow.map(type => (
              <View style={styles.iconContainer}>
                <type.icon width={SCREEN_WIDTH / 5} height={SCREEN_WIDTH / 5}/>
                <Text style={{fontWeight: '700'}}>{type.title}</Text>
              </View>
            ))}
          </View>
        ))}
        <TouchableOpacity
          onPress={() => {}}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Заберите мой мусор
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    color: '#4BB462',
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 32,
    fontWeight: '700',
  },
  container: {
    flex: 1,
    borderColor: 'red',
    paddingLeft: 16,
    paddingRight: 16,
  },
  row: {
    flexDirection: 'row',
    height: SCREEN_WIDTH / 3,
  },
  iconContainer: {
    flex: 1,
    height: SCREEN_WIDTH / 3,
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    width: SCREEN_WIDTH / 5,
    height: SCREEN_WIDTH / 5,
  },
  button: {
    backgroundColor: '#4BB462',
    width: 200,
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
