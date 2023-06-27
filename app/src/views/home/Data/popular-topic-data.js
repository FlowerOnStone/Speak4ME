let topicList = [
    {
        id: 1,
        title: 'Chào hỏi',
        sentences: [
            {
                id: 1,
                content: 'Xin chào',
                numberOfUses: 0,
                lastUses: new Date(),
            },
            {
                id: 2,
                content: 'Tạm biệt',
                numberOfUses: 0,
                lastUses: new Date(),
            },
            {
                id: 3,
                content: 'Hẹn gặp lại',
                numberOfUses: 0,
                lastUses: new Date(),
            },
        ],
        currentId: 3,
    },
];

let currentTopicId = 1;

export function getPopularTopics() {
    return topicList;
};

export function getPopularTopic(id) {
    return topicList.filter(topic => topic.id == id)[0];
}

export function deletePopularTopic(id) {
    console.log(id, topicList);
    topicList = topicList.filter(topic => topic.id !== id);
    console.log(id, topicList);
};

export function addPopularTopic(newTopicTitle) {
    currentTopicId = currentTopicId + 1;
    topicList.push(
        {
            id: currentTopicId,
            title: newTopicTitle,
            content: [],
            currentId: 0,
        }
    );
    console.log(topicList);
}

export function changePopularTopicTitle(topicId, newTitle) {
    for (let i = 0; i < topicList.length; i++) {
        if (topicList[i].id == topicId) {
            topicList[i] = { ...topicList[i], title: newTitle };
        }
    }
};

export function addPopularSentence(topicId, sentence) { 
    for (let i = 0; i < topicList.length; i++) {
        if (topicList[i].id == topicId) {
            topicList[i] = {
                ...topicList[i],
                sentences: [...topicList[i].sentences, {
                    id: topicList[i].currentId + 1,
                    content: sentence,
                    numberOfUses: 0,
                    lastUses: new Date()
                }],
                currentId: topicList[i].currentId + 1,
            };
        }
    }
};

export function changePopularSentence(topicId, sentenceId, newContent) {
    for (let i = 0; i < topicList.length; i++) {
        if (topicList[i].id == topicId) {
            for (let j = 0; j < topicList[i].sentences.length; j++){
                if (topicList[i].sentences[j].id == sentenceId) {
                    topicList[i].sentences[j] = {
                        id: topicList[i].sentences[j].id,
                        content: newContent,
                        lastUses: new Date(),
                        numberOfUses: topicList[i].sentences[j].numberOfUses + 1
                    };
                }
            }
        }
    }
};

export function usePopularSentence(topicId, sentenceId) {
    for (let i = 0; i < topicList.length; i++) {
        if (topicList[i].id == topicId) {
            for (let j = 0; j < topicList[i].sentences.length; j++) {
                if (topicList[i].sentences[j].id == sentenceId) {
                    topicList[i].sentences[j] = {
                        ...topicList[i].sentences[j],
                        lastUses: new Date(),
                        numberOfUses: topicList[i].sentences[j].numberOfUses + 1
                    }
                } 
            }
        }
    } 
};

export function deletePopularSentence(topicId, sentenceId) {
    for (let i = 0; i < topicList.length; i++) {
        if (topicList[i].id == topicId) {
            topicList[i].sentences = topicList[i].sentences.filter(sentence => sentence.id != sentenceId);
        }
    }
};