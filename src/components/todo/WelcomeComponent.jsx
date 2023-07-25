import { useParams, Link }  from 'react-router-dom'


export default function WelcomeComponent(){

    const {username} =  useParams()

    return(
        <div>
        <h1>Welcome {username}!</h1>
        <div className="Welcome">
            Manage your todos - <Link to='/todos'>Go Here.</Link>
        </div>
        </div>
    )
}