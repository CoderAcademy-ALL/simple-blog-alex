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
        case "updateBlogPost":
            const otherPosts = state.blogPosts.filter( post => post._id !== action.data._id)
            return {
                ...state,
                blogPosts: [action.data, ...otherPosts]
            }
        case "deleteBlogPost":
            const newBlogPosts = state.blogPosts.filter(post => post._id !== parseInt(action.data))
            return {
                ...state,
                blogPosts: newBlogPosts
            }
        

        
        default: 
           return state
    }  

}