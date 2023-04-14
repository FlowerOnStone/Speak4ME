import React, {Component} from 'react';
import { View } from 'react-native';
import { ICON_CONSTANTS } from '../../constants/icon-constants';

export default class Icon extends Component {

  render() {
      return (
        <View {...this.props.containerStyle}>{this.props.icon({...ICON_CONSTANTS, ...this.props.iconStyle})}</View>
      );
  }
}
