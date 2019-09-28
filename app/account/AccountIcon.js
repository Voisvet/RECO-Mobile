import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default class AccountIcon extends React.Component {
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
          viewBox="0 0 41 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M31.71 14.1029C31.71 17.1686 30.6191 19.7786 28.4372 21.9328C26.3105
               24.0871 23.7419 25.1781 20.7314 25.2057C17.721 25.1781 15.1386
               24.0871 12.9843 21.9328C10.83 19.7786 9.75288 17.1686 9.75288
               14.1029C9.75288 11.0371 10.83 8.41333 12.9843 6.23142C15.1386
               4.10476 17.721 3.02762 20.7314 3C23.7419 3.02762 26.3105 4.10476
               28.4372 6.23142C30.6191 8.41333 31.71 11.0371 31.71 14.1029ZM31.5857
               27.4429C28.0781 30.3705 24.46 31.8343 20.7314 31.8343C16.9753 31.8343
               13.3848 30.2186 9.96002 26.9871C5.98288 27.65 3.66286 30.0667 3
               34.2371V61H38.4629V34.2371C37.7724 30.0667 35.48 27.8019 31.5857 27.4429Z"
            stroke={this.props.strokeColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </View>
    );
  }

}
