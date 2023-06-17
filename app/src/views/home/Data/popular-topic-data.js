let topicList =[
    {
        id: 1,
        title: 'Chào hỏi',
        content: ['Xin chào', 'Tạm biệt', 'Hẹn gặp lại'],
    },
];

export function getPopularTopics() {
    return topicList;
};

export function deletePopularTopic(id) {
    console.log(id, topicList);
    topicList = topicList.filter(topic => topic.id !== id);
    console.log(id, topicList);
};

export function addPopularTopic(newTopicTitle) {
    let newId = 1;
    if (topicList.length != 0) {
        newId = topicList[topicList.length - 1].id + 1;
    }
    topicList.push(
    {
        id: newId,
        title: newTopicTitle,
        content: [],
        });
    console.log(topicList);
}

export function changePopularTopicTitle(targetId, newTitle) {
    topicList = topicList.map((topic) => {
        if (topic.id === targetId) {
            return { ...topic, title: newTitle };
        } else {
            return topic;
        }
    });
};
