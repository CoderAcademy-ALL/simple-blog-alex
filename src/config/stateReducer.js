export default function stateReducer(state, action) {
    switch(action.type) {
        case "setLoggedInUser":
            return {
                ...state, 
                loggedInUser: action.data
            }
        case "setBlogPosts": 
            return {
                ...state,
                blogPosts: action.data
            }
        case "addBlogPost": 
            return {
                ...state,
                blogPosts: [action.data, ...state.blogPosts]
            }
        
        default: 
           return state
    }  

}