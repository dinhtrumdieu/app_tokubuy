import {Review} from "../model/Review";
import {createStore} from "redux";
import {ListReviewReducer} from "./reducer/ListReviewReducer";

export const defaultState = {
    listReview: [
        new Review(1, 'いいね', 123, 'asdsd', 'adsad', 'asdsd', 3, 23),
        new Review(2, 'いいね', 123, 'asdsd', 'adsad', 'asdsd', 3, 23),
        new Review(3, 'いいね', 123, 'asdsd', 'adsad', 'asdsd', 3, 23),
        new Review(4, 'いいね', 123, 'asdsd', 'adsad', 'asdsd', 3, 23),
        new Review(5, 'いいね', 123, 'asdsd', 'adsad', 'asdsd', 3, 23),
    ],
};

export const store = createStore(ListReviewReducer);
