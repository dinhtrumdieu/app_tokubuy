export const likeActionClick = (id)=> {
    return {type: 'LIKE', id: id}
};

export const commentActionClick = (id)=> {
    return {type: 'COMMENT', id: id}
};