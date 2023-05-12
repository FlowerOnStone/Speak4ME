/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useCallback } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import { SearchBar } from 'react-native-elements';


import COLOR from '../constants/color';
import HistorySentence from '../components/common/historySentence';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from '../components/icons/icon-tag';
import { settingsIcon } from '../components/icons/settings-icon';
import THEME from '../constants/theme';
import SettingsOverlay from '../components/common/settings-overlay';
import ScreenHeader from '../components/common/screen-header';

export default function History({ route, navigation }) {

  const { sentences = [] } = route.params ?? {};

  console.log(route.params);
  const [searchText, setSearchText] = useState('');
  /// Header
  const [settingsButton] = useState(
    <TouchableOpacity onPress={() => setSettingsOverlayVisible(true)}>
      <Icon icon={settingsIcon} iconStyle={{ scale: 0.8 }} />
    </TouchableOpacity>
  );
  const [backButton] = useState(
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <RNVIcon name="angle-left" size={THEME.FONT_SIZE_LARGE} color='black' />
    </TouchableOpacity>
  );
  /// Settings Overlay
  const [settingsOverlayVisible, setSettingsOverlayVisible] = useState(false);
  const [distanceToTop, setDistanceToTop] = useState(0);
  const handleBackdropPress = useCallback(() => {
    setSettingsOverlayVisible(false);
  }, []);

  const handleSearch = (text) => {
    setSearchText(text); // Lưu trữ giá trị của thanh tìm kiếm khi người dùng nhập vào
    // Thực hiện hoạt động tìm kiếm dựa trên searchText ở đây
  };


  return (
    <View style={styles.container}>
      <View
        style={{ width: '100%', height: '100%', alignItems: 'center' }}
        onLayout={(event) => { setDistanceToTop(event.nativeEvent.layout.height); }}
      >
				<ScreenHeader
					leftItem={backButton}
					title={'Lịch sử nói'}
					rightItem={settingsButton}
				/>
        <SearchBar
          containerStyle={styles.searchBar}
          inputContainerStyle={styles.searchBarInput}
          inputStyle={styles.searchBarTextInput}
          placeholder="Tìm kiếm..."
          value={searchText}
          onChangeText={handleSearch}
        />
        <View style={styles.contentContainer}>
          <ScrollView style={styles.scroll}>
            {
              sentences.length > 0 && sentences.map((sentence, index) => (
                <HistorySentence key={index} text={sentence} />
              ))}
          </ScrollView>
        </View>
      </View>

      <SettingsOverlay.SlideInDown
        isVisible={settingsOverlayVisible}
        distanceToTop={distanceToTop}
        onBackdropPress={handleBackdropPress}
        // defaultFocusedId={sortOptionHeader.id}
        optionsHeaderList={[]}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
    alignItems: 'center',
  },
  contentContainer: {
    color: COLOR.BACKGROUND,
    height: '90%',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    display: 'flex'
  },
  scroll: {
    display: 'flex',
    marginLeft: '5%',
    marginRight: '5%',
    width: '90%',
  },
  searchBar: {
    backgroundColor: '#fff', // Màu nền của thanh tìm kiếm
    width: "90%",
    borderRadius: 35,
    borderWidth: 2,
    margin: 10
  },
  searchBarInput: {
    backgroundColor: '#f2f2f2', // Màu nền của input trong thanh tìm kiếm
    borderRadius: 30,
  },
  searchBarTextInput: {
    fontSize: 16, // Kích thước chữ trong input của thanh tìm kiếm
  },
});
