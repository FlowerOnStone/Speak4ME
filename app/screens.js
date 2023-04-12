import History from "./src/views/history";
import Editor from "./src/views/editor";
import Common from "./src/views/common";

const screens = [

    {
        name: 'EditorScreen',
        component: Editor,
        options: {
            title: "Soạn thảo"
        }
    },

    {
        name: "HistoryScreen",
        component: History,
        options: {
            title: "Lịch sử nói",
        },
    },

    {
        name: "CommonScreen",
        component: Common,
        options: {
            title: "Thông dụng",
        }
    },
]

export default screens;