import { StyleSheet, TouchableOpacity } from "react-native";
import History from "./src/views/history";
import Editor from "./src/views/editor";
import Common from "./src/views/common";
import { Icon } from './src/components/icons/icon-tag';
import moreOptionIcon from './src/components/icons/more-options-icon';

const Router = [
  {
    name: 'EditorScreen',
    component: Editor,
    options: {
      title: "Soạn thảo",
      headerRight: () => (
        <TouchableOpacity style={styles.iconBox}>
          <Icon icon={moreOptionIcon} />
        </TouchableOpacity>
      ),
    }
  },
  {
    name: "HistoryScreen",
    component: History,
    options: {
      title: "Lịch sử nói",
      headerRight: () => (
        <TouchableOpacity style={styles.iconBox}>
          <Icon icon={moreOptionIcon} />
        </TouchableOpacity>
      ),
    },
  },
  {
    name: "CommonScreen",
    component: Common,
    options: {
      title: "Thông dụng",
      headerRight: () => (
        <TouchableOpacity style={styles.iconBox}>
          <Icon icon={moreOptionIcon} />
        </TouchableOpacity>
      ),
    }
  },
];

const styles = StyleSheet.create({
  iconBox: {
    marginRight: 10,
  },
});

export default Router;