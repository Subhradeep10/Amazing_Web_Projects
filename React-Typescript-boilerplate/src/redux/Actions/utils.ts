import {
    LANGUAGE_TRANSLATE, SEARCHING_REQUEST, SEARCHING_SUCCESS, SET_FILTER_DROPDOWN_TAGS
} from '@constants/Types';
import { postAPI } from "@network/network";

export const languageTranslate: any = (data: any) => (dispatch: any) => {
    dispatch({ type: LANGUAGE_TRANSLATE, payload: data });
}

export const getSearchingResult: any = (data: any, filterDropdown: any) => (dispatch: any) => {

    // const checkFilter = Object.entries(filterDropdown)
    // const filteredValue: any = []
    // if (checkFilter.length > 0) {
    //     checkFilter.forEach(filter => {
    //         filteredValue.push({
    //             "field": "tags",
    //             "value": filter[0].replaceAll("_"," ")
    //         })
    //     })
    // }

    if (filterDropdown.length > 0) {
        data = { ...data, filters: filterDropdown }
    }

    dispatch({ type: SEARCHING_REQUEST, payload: true });
    return postAPI('/query/search', data)
        .then((res: any) => {
            if (res?.data) {
                dispatch({ type: SEARCHING_SUCCESS, payload: res.data });
            }
        })
        .catch((err: any) => {
            dispatch({ type: SEARCHING_REQUEST, payload: false });
        });
};


export const setFilterDropdownTags: any = (params: any) => (dispatch: any) => {
    dispatch({ type: SET_FILTER_DROPDOWN_TAGS, payload: params });
};
