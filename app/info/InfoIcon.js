import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default class InfoIcon extends React.Component {
  static defaultProps = {
    strokeColor: '#666666',
  };

  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {alignItems: 'center', justifyContent: 'center'},
        ]}
      >
        <Svg
          width="100%"
          height="100%"
          viewBox="0 0 74 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M19.8881 43.827H47.8802M70.637 39.1406V2.99994H17.9882L3 21.9569V57.4642H56.1554C65.5846
               57.1546 70.4119 51.0467 70.637 39.1406ZM19.5504 18.1148H57.5909H19.5504ZM19.5504
               31.2453H54.5511H19.5504Z"
            stroke={this.props.strokeColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
        </Svg>
      </View>
    );
  }

}
