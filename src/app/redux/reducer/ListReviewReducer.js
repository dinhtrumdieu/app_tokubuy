import {defaultState} from "../AppReducer";

export const ListReviewReducer = (stateReview = defaultState,action)=>{
        switch (action.type){
            case 'LIKE':
                console.log("voday");
                return {
                    ...stateReview,
                    listReview: stateReview.listReview.map((item) => {
                        if (item.id === action.id) {
                            return {...item, like: item.like + 1};
                        } else {
                            return item;
                        }
                    })
                };
            case 'COMMENT':
                return{
                        ...stateReview,
                        listReview: stateReview.listReview.map((item) => {
                            if (item.id === action.id) {
                                return {...item, comment: item.comment + 1};
                            } else {
                                return item;
                            }
                        })
                };

            default:
                return stateReview;
        }

};
