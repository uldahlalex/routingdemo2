import {useParams} from "react-router";
import {useEffect, useState} from "react";

export type AuthorDetailParam = {
    authorId: string;
}
export interface Author {
    id: number
    idBook: number
    firstName: string
    lastName: string
}


export default function AuthorDetail() {
    
    const params = useParams<AuthorDetailParam>();
    const [currentAuthor, setCurrentAuthor] = useState<Author>()
    
    useEffect(() => {
        fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/'+params.authorId)
            .then(result => {
                result.json().then(json => {
                    setCurrentAuthor(json)
                })
            })
    }, [])
    
    return <div>

        {
            JSON.stringify(currentAuthor)
        }
        
    </div>
}