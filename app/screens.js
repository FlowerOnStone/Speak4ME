import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import History from './src/views/history';
import Editor from './src/views/editor';
import PopularSentences from './src/views/popular-sentences';
import { Icon } from './src/components/icons/icon-tag';
import moreOptionIcon from './src/components/icons/more-options-icon';

const screens = [
  {
    name: 'EditorScreen',
    component: Editor,
    options: {
      title: 'Soạn thảo',
      headerRight: () => (
        <TouchableOpacity style={styles.iconBox}>
          <Icon icon={moreOptionIcon} />
        </TouchableOpacity>
      ),
    },
  },
  {
    name: 'HistoryScreen',
    component: History,
    options: {
      title: 'Lịch sử nói',
      headerRight: () => (
        <TouchableOpacity style={styles.iconBox}>
          <Icon icon={moreOptionIcon} />
        </TouchableOpacity>
      ),
    },
  },
  {
    name: 'PopularSentencesScreen',
    component: PopularSentences,
    options: {
      title: 'Thông dụng',
      headerRight: () => (
        <TouchableOpacity style={styles.iconBox}>
          <Icon icon={moreOptionIcon} />
        </TouchableOpacity>
      ),
    },
  },
];

const styles = StyleSheet.create({
  iconBox: {
    marginRight: 10,
  },
});

export default screens;
