const initialState = {
   data: {}
   , idLoading: false
   , isError: false
   ,isSuccess: true
}

const hotelDetail = (state = initialState, action) => {
   switch (action.type) {
      case 'GET_HOTEL_DETAIL_PENDING':
         return {
            ...state, isLoading: true
         }
         
      case 'GET_HOTEL_DETAIL_REJECTED':
         return {
            ...state, isLoading: false, isError: true
         }
         
      case 'GET_HOTEL_DETAIL_FULFILLED':
         return {
            ...state,
            data: action.payload.data
            , isLoading: false, isError: false
         }
      default:
         return state;
         
   }
}

export default hotelDetail 