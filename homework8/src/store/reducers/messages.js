import { SEND_MESSAGE } from '../actions/message'
const initState = [
    { message: 'message 0', author: 'robot', id: 0 },
    { message: 'message 1', author: 'robot', id: 1 },
    { message: 'message 2', author: 'robot', id: 2 },
    { message: 'message 3', author: 'robot', id: 3 },
    { message: 'message 4', author: 'robot', id: 4 },
    { message: 'message 5', author: 'robot', id: 5 },
    { message: 'message 6', author: 'robot', id: 6 },
    { message: 'message 7', author: 'robot', id: 7 },
    { message: 'message 8', author: 'robot', id: 8 },
    { message: 'message 9', author: 'robot', id: 9 },
    { message: 'message 10', author: 'robot', id: 10 },
];
export default function messagesReducer(store = initState, action) {
    switch (action.type) {
        case SEND_MESSAGE:

            const newMsgId = store.length;
            return [store,
                {
                    message: action.message,
                    author: message.author,
                    id: newMsgId,
                    chatId: action.chatId
                }
            ];

        default:
            return store;
    }
}