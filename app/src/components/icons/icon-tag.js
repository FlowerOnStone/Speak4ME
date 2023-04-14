import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { ICON_CONSTANTS } from '../../constants/icon-constants';

export default class Icon extends Component {

  render() {
      return (
        <View {...this.props.containerStyle}>
            {this.props.icon({...styles.defaultIconStyle, ...this.props.iconStyle})}
        </View>
      );
  }
}

const styles = StyleSheet.create({
    defaultIconStyle: {
        scale: ICON_CONSTANTS.SCALE,
        color: ICON_CONSTANTS.COLOR,
    },
});
