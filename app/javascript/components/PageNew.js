import React from 'react'

const PageNew = (props) =>{
    return(
        <>
            <div>
                <h1>New Page Form</h1>
                <form action='/pages' method='post'>
                    {/* <input name='modelname[attribute]/> */}
                    <p>title</p>
                    <input name='page[title]' />
                    <p>author</p>
                    <input name='page[author]' />
                    <p>body</p>
                    <textarea name='page[body]'/>

                    <input name='random[thing]' />
                    <button type='submit'>add</button>
                </form>
            </div>
            
        </>
    )
}

export default PageNew