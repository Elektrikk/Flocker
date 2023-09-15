import {useState} from "react"
import PostPreview from "./posts/PostPreview"
import AddIcon from '@mui/icons-material/Add';

export default function Body(){

    return(
        <div className="flex-col mx-auto bg-background ">
            <h1 className="text-4xl m-auto p-8 text-primary">FEATURED POSTS</h1>
            <br />
            <div className="previewposts m-auto flex flex-wrap ">
                <PostPreview image={"images/KITAOFF.png"} title="Bocchi says hello" />
                <PostPreview image={"images/malenia.jfif"} title="Kita says fuck off"/>
                <button className='fixed bottom-6 right-8 rounded-full bg-secondary h-14 w-14'><AddIcon fontSize='large'/></button>
                <PostPreview image={"images/KITAOFF.png"} title="Bocchi says hello" />
                
                
            </div>
        </div>
    )

}

// flex-col mx-auto bg-background max-h-screen h-screen overflow-x-visible max-w-screen-2xl