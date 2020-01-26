const initialState = {
   data: [],
   status: {},
   idLoading: false,
   isError: false,
   isSuccess: true,
 };
 
 const booking = (state = initialState, action) => {
   switch (action.type) {
     case 'DELETE_BOOKING_PENDING':
       return {
         ...state,
         isLoading: true,
       };
     case 'DELETE_BOOKING_REJECTED':
       return {
         ...state,
         isLoading: false,
         isError: true,
       };
 
     case 'DELETE_BOOKING_FULFILLED':
       return {
         ...state,
         status: action.payload.data,
         isLoading: false,
         isError: false,
       };
     case 'POST_BOOKING_PENDING':
       return {
         ...state,
         isLoading: true,
       };
     case 'POST_BOOKING_REJECTED':
       return {
         ...state,
         isLoading: false,
         isError: true,
       };
 
     case 'POST_BOOKING_FULFILLED':
       return {
         ...state,
         status: action.payload.data,
         isLoading: false,
         isError: false,
       };
     case 'GET_BOOKING_PENDING':
       return {
         ...state,
         isLoading: true,
       };
     case 'GET_BOOKING_REJECTED':
       return {
         ...state,
         isLoading: false,
         isError: true,
       };
 
     case 'GET_BOOKING_FULFILLED':
       return {
         ...state,
         data: action.payload.data.data,
         isLoading: false,
         isError: false,
       };
 
     default:
       return state;
   }
 };
 
 export default booking;
 