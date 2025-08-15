import {useParams} from "react-router";

export default function AuthorDetail() {
    
    const params = useParams();
    
    return <div>

        {JSON.stringify(params)}
        
    </div>
}