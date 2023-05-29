import {NavLink} from "react-router-dom";

function Link(props) {
    const { className, to, type, children } = props;
    return type === 'link'
        ? <a className={className} href={to}>{children}</a>
        : <NavLink className={className} to={to}>{children}</NavLink>
}
Link.defaultProps = {
    type: 'link'
}