import ReadMoreIcon from '@mui/icons-material/ReadMore';


export default function PostPreview(props: {image: any, title: string}){


    return(
        <div className="h-96 w-96 rounded-2xl bg-white m-auto flex-wrap">
            <img src={props.image} alt="WHOMEGALOL" className="rounded-t-2xl w-full h-3/5 object-cover shadow-lg border-none"/>
            <p className="text-primary m-auto p-4 text-2xl"> {props.title} </p>
            <a className="text-right text-lg p-4 -mr-10 text-primary align-text-bottom" href='/'><ReadMoreIcon sx={{ color: 'hotpink' }} fontSize='large' /> READ MORE... </a>
            
        </div>
    )
}