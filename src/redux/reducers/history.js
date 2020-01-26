const initialState = {
   data: [],
   status: {},
   idLoading: false,
   isError: false,
   isSuccess: true,
 };
 
 const history = (state = initialState, action) => {
   switch (action.type) {
     case 'GET_HISTORY_PENDING':
       return {
         ...state,
         isLoading: true,
       };
     case 'GET_HISTORY_REJECTED':
       return {
         ...state,
         isLoading: false,
         isError: true,
       };
     case 'GET_HISTORY_FULFILLED':
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
 
 export default history;
 