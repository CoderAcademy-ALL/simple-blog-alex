import React, {useState} from 'react';


function NewBlogPost(props) {
   const {history, addBlogPost, nextId} = props
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

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({...formState, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newPost = {
            _id: nextId,
            title: formState.title,
            category: formState.category,
            content: formState.content,
            modified_date: new Date()
        }
        addBlogPost(newPost)
        history.push('/')
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <div style={divStyles}>
                <label style={labelStyles}>Title</label>
                <input style={inputStyles} required type="text" name="title" placeholder="Enter a title" onChange ={handleChange}/>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Category</label>
                <input style={inputStyles}  type="text" name="category" onChange={handleChange}/>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Content</label>
                <textarea style={textAreaStyles} type="text" name="content" placeholder="Enter a Post" onChange={handleChange} />
            </div>
            <input type='submit' value='Add a Post'></input>
        </form>
    )
}

export default NewBlogPost;
