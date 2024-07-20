import {Link} from "react-router-dom"
export default function NotFoundPage () {

    return (
        <div>
            <p>Oops! something went wrong</p>
            {/* <NavLink to="/" >Home</NavLink> */}
            <Link to ="/">go home</Link>
        </div>
    )
}