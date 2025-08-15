import {useEffect, useState} from "react";
import type {Author} from "./AuthorDetail.tsx";
import {useLocation, useNavigate} from "react-router";

export default function AuthorsList() {
    
    const [allAuthors, setAllAuthors] = useState<Author[]>([])
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors')
            .then(result => {
                result.json().then(authors => {
                    setAllAuthors(authors)
                })
            })
    }, [])
    
    return <div>
        {
            JSON.stringify(location)
        }

        {
            allAuthors.map(author => {
                return <div><button onClick={() => {
                    navigate('/authors/'+author.id)
                }}>{author.firstName}</button></div>
            })
        }
        
    </div>
}