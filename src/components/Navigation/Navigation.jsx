import { NavLink } from "react-router-dom"
import clsx from "clsx"
import css from "./Navigation.module.css"
export default function Navigation() {

    const buildLinkClass =({isActive}) => {
        return clsx(css.link, isActive && css.linkActive)
    }
    // const buildLinkClass = ({isActive}) => {
    //     return clsx(css.link, isActive && css.linkActive)
    // }

  return (
    <header className={css.navigationSection}>
<div className={css.navigationContainer}>

    <nav className={css.navigationLinks}>
      <NavLink to="/" className={buildLinkClass}>Home</NavLink>
      <NavLink to="/movies" className={buildLinkClass}  >Movies</NavLink>
      {/* <NavLink to="/movies/:movieId" >MovieDetailsPage</NavLink>
      <NavLink to="/movies/:movieId/cast" >MovieCast</NavLink>
      <NavLink to="/movies/:movieId/reviews" >MovieReviews</NavLink>
      <NavLink to ="*" >NotFoundPage</NavLink> */}
    </nav>
</div>
    </header>
  );
}
