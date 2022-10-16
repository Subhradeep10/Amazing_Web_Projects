import {
    LANGUAGE_TRANSLATE, SEARCHING_REQUEST, SEARCHING_SUCCESS, SET_FILTER_DROPDOWN_TAGS
} from "@constants/Types";

const getLang = localStorage.getItem('i18nextLng')
const condition = (getLang && (getLang === 'en' || getLang === 'ar')) ? getLang : 'ar'
const initialState: any = {
    rtl: condition,
    searchingInProgress: false,
    filterDropdown: [],
    searching: [],

}
const utilsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LANGUAGE_TRANSLATE: {
            return { ...state, rtl: action.payload, filterDropdown: [] };
        }

        case SEARCHING_REQUEST: {
            return { ...state, searchingInProgress: action.payload };
        }

        case SEARCHING_SUCCESS: {
            return {
                ...state,
                searching: action.payload,
                searchingInProgress: false
            };
        }

        case SET_FILTER_DROPDOWN_TAGS: {
            // first remove false values

            const filters: any = [];
            if(action.payload?.length){
                // console.log('action.payload', action.payload);
                action.payload.forEach((o: any) =>{
                    if(o[0] === 'dates' && o[1] && (o[1]?.greater_than_or_equal || o[1]?.less_than_or_equal)){
                        console.log('..........................')
                        filters.push({
                            field : 'date',
                            ...o[1]
                        });
                    }
                   else if(o[0] !== 'dates' && o.length){
                        o[1].forEach((item: any) => {
                            if(o[0] === 'dates' && o[1].length){
                                    filters.push({
                                        field : 'date',
                                        ...item
                                    });
                            }
                            if(item.value){
                                filters.push({
                                    field : o[0],
                                    value : item.key
                                });
                            }
                        })
                    }
                })
            }

            return { ...state, filterDropdown: filters };
        }

        default:
            return state;
    }
};

export default utilsReducer;
