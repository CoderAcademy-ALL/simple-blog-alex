import React, {useState, useEffect} from 'react';

function EditBlogPost(props) {
    const {history, post, updateBlogPost} = props
    //styling
    const divStyles = {
       display: 'grid',
       width: '100vw',
   }
   const inputStyles = {
       width: '70vw',
       margin: '0.5em'
   }
   const labelStyles = {
       fontSize: '1.2em'
   }
   const textAreaStyles = {
       height: '200px',
       margin: '0.5em',
       width: '70vw'
   }

   //state 
    const initalFormState = {
        title: "",
        category: "",
        content: ""
    }
    const [formState, setFormState] = useState(initalFormState);

    useEffect(() => {
        post && setFormState({ 
            title: post.title,
            category: post.category,
            content: post.content
         })
    }, [post])

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({...formState, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newPost = { ...post, ...formState, modified_date: new Date()}
        updateBlogPost(newPost)
        console.log(newPost)
        history.push('/')
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <div style={divStyles}>
                <label style={labelStyles}>Title</label>
                <input style={inputStyles} required type="text" name="title" placeholder="Enter a title" value={formState.title} onChange ={handleChange}/>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Category</label>
                <input style={inputStyles}  type="text" name="category" onChange={handleChange} value={formState.category}/>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Content</label>
                <textarea style={textAreaStyles} type="text" name="content" placeholder="Enter a Post" onChange={handleChange} value={formState.content} />
            </div>
            <input type='submit' value='Update Post'></input>
        </form>
    )
}

export default EditBlogPost;
