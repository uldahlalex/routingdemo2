import {Outlet, useNavigate} from "react-router";

export default function HomeComponent() {
    
    const navigate = useNavigate()
    
    return <div>
        
        <button onClick={() => navigate(-1)}>Go back</button>
        <button onClick={() => navigate(1)}>Go forward</button>
        
        This is the home component
    
        <Outlet />
        
        This is where the home component ends
    
    </div>
}