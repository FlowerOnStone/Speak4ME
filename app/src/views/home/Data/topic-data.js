let topicList = [
    {
        id: 1,
		title: 'Cuộc sống',
		description: 'Các câu nói về cuộc sống',
        sentences: [
            {
                id: 1,
                content: 'Bình yên nằm trong tâm trí, vậy mà người người không biết cứ sốt sắng tìm kiếm từ bên ngoài.',
                numberOfUses: 0,
                lastUses: new Date(),
            },
            {
                id: 2,
                content: 'Có một nơi để về, đó là nhà. Có những người để yêu thương, đó là gia đình. Có được cả hai, đó là hạnh phúc. Một cuộc đời hạnh phúc cần có sự bình yên tâm hồn.',
                numberOfUses: 0,
                lastUses: new Date(),
            },
            {
                id: 3,
                content: 'Chỉ đến khi chấp nhận mình khiếm khuyết rồi tìm cách bù đắp lại lỗ hỏng, con người mới mong có ngày bình yên.',
                numberOfUses: 0,
                lastUses: new Date(),
            },
            {
                id: 4,
                content: 'Bình yên là khi ngoảnh lại những năm tháng đã qua, thấy gập ghềnh chông gai lởm chởm. Thế mà mình vẫn còn ngồi đây với một vài vết xước nhỏ đã phai màu.',
                numberOfUses: 0,
                lastUses: new Date(),
            },
            {
                id: 5,
                content: 'Hai chữ bình yên viết ra dễ dàng lắm, vậy mà mất cả đời để cảm nhận bình yên là chi.',
                numberOfUses: 0,
                lastUses: new Date(),
            },
        ],
        currentId: 5,
    },
];

let currentTopicId = 1;

export function getTopics() {
    return topicList;
};

export function getTopic(id) {
    return topicList.filter(topic => topic.id == id)[0];
}

export function deleteTopic(id) {
    topicList = topicList.filter(topic => topic.id !== id);
};

export function addPopularTopic(topicTitle, topicDescription) {
    currentTopicId = currentTopicId + 1;
    topicList.push(
        {
            id: currentTopicId,
            title: topicTitle,
            description: topicDescription,
            content: [],
            currentId: 0,
        }
    );
    console.log(topicList);
}

export function changeTopic(topicId, newTitle, newTopicDescription) {
    for (let i = 0; i < topicList.length; i++) {
        if (topicList[i].id == topicId) {
            console.log(topicId, newTitle, newTopicDescription);

            topicList[i] = { ...topicList[i], title: newTitle, description: newTopicDescription };
        }
    }
};

export function addSentence(topicId, sentence) { 
    for (let i = 0; i < topicList.length; i++) {
        if (topicList[i].id == topicId) {
            topicList[i] = {
                ...topicList[i],
                sentences: [...topicList[i].sentences, {
                    id: topic.currentId + 1,
                    content: sentence,
                    numberOfUses: 0,
                    lastUses: new Date()
                }],
                currentId: topicList[i].currentId + 1,
            };
        }
    }
};

export function changeSentence(topicId, sentenceId, newContent) {
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

export function useSentence(topicId, sentenceId) {
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

export function deleteSentence(topicId, sentenceId) {
    for (let i = 0; i < topicList.length; i++) {
        if (topicList[i].id == topicId) {
            topicList[i].sentences = topicList[i].sentences.filter(sentence => sentence.id != sentenceId);
        }
    }
};