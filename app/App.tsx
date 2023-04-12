/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Component} from 'react';
import { Alert, Text, View } from 'react-native';
import { Icon } from './src/components/icons/icon-tag';
import binIcon from './src/components/icons/save-icon';
import SearchBar from './src/components/common/search-bar';


export default function () {
    // return (<SearchBar
    //           placeholder="Type Here..."
    //         />);
    return (<SearchBar/>);
    // return <Icon icon={binIcon}/>;
}

// export {default} from './.storybook';

// import React, { useState } from 'react';
// import { SearchBar } from '@rneui/themed';
// import { View, Text, StyleSheet } from 'react-native';

// // type SearchBarComponentProps = {};

// export default function() {

// return (
//     <SearchBar
//       placeholder="Type Here..."
//     />
// );
// };

// export default SwitchComponent;
