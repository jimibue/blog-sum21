import React from 'react'

// A react component is just a js function that returns jsx

const Pages = (props) => {
    const pages = props.pages
     
    const renderPages = ()=>{
        // pages = [{title:'sdf', author:'sdf', body:'sdf'}]

        return pages.map( (page) => {
            return(
                <div>
                   <h1>{page.title}</h1>
                   <p>{page.author}</p>
                   <p>{page.id}</p>
                   <p>{page.body}</p>
                </div>
            )
        })
    }

    return(
        <div>
            {renderPages()}
        </div>
    )
}

export default Pages