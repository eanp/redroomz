const initialState = {
   data: [],
   status: {},
   idLoading: false,
   isError: false,
   isSuccess: true,
 };
 
 const bill = (state = initialState, action) => {
   switch (action.type) {
     case 'DELETE_BILL_PENDING':
       return {
         ...state,
         isLoading: true,
       };
     case 'DELETE_BILL_REJECTED':
       return {
         ...state,
         isLoading: false,
         isError: true,
       };
 
     case 'DELETE_BILL_FULFILLED':
       return {
         ...state,
         status: action.payload.data,
         isLoading: false,
         isError: false,
       };
     case 'POST_BILL_PENDING':
       return {
         ...state,
         isLoading: true,
       };
     case 'POST_BILL_REJECTED':
       return {
         ...state,
         isLoading: false,
         isError: true,
       };
 
     case 'POST_BILL_FULFILLED':
       return {
         ...state,
         status: action.payload.data,
         isLoading: false,
         isError: false,
       };
     case 'GET_BILL_PENDING':
       return {
         ...state,
         isLoading: true,
       };
     case 'GET_BILL_REJECTED':
       return {
         ...state,
         isLoading: false,
         isError: true,
       };
     case 'GET_BILL_FULFILLED':
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
 
 export default bill;
 