const initialState = {
   data: []
   , recommend:[]
   , idLoading: false
   , isError: false
   , isSuccess: true
}

const hotelList = (state = initialState, action) => {
   switch (action.type) {
      case 'GET_HOTEL_LIST_PENDING':
         return {
            ...state, isLoading: true
         }

      case 'GET_HOTEL_LIST_REJECTED':
         return {
            ...state, isLoading: false, isError: true
         }

      case 'GET_HOTEL_LIST_FULFILLED':
         return {
            ...state,
            data: action.payload.data
            , isLoading: false, isError: false
         }
      case 'GET_RECOMMENDED_LIST_PENDING':
         return {
            ...state, isLoading: true
         }

      case 'GET_RECOMMENDED_LIST_REJECTED':
         return {
            ...state, isLoading: false, isError: true
         }

      case 'GET_RECOMMENDED_LIST_FULFILLED':
         return {
            ...state,
            recommend: action.payload.data.data.filter(v => v.rate > 4.5)
            , isLoading: false, isError: false
         }

      default:
         return state;

   }
}

export default hotelList;