import History from "./src/views/history";
import Editor from "./src/views/editor";

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
    
]

export default screens;