const initialState = {
   data: [],
   status: {}
  , idLoading: false
  , isError: false
  ,isSuccess: true
}

const review = (state = initialState, action) => {
  switch (action.type) {
     case 'POST_REVIEW_PENDING':
        return {
           ...state, isLoading: true
        }
     case 'POST_REVIEW_REJECTED':
        return {
           ...state, isLoading: false, isError: true
        }
     case 'POST_REVIEW_FULFILLED':
        return {
           ...state,
           status: action.payload.data
           , isLoading: false, isError: false
        }
     case 'GET_REVIEW_PENDING':
        return {
           ...state, isLoading: true
        }
        
     case 'GET_REVIEW_REJECTED':
        return {
           ...state, isLoading: false, isError: true
        }
        
     case 'GET_REVIEW_FULFILLED':
        return {
           ...state,
           data: action.payload.data.data
           , isLoading: false, isError: false
        }
     default:
        return state;
        
  }
}

export default review 