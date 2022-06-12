import {useLocation} from 'react-router-dom';
export default function Error() {
    let location = useLocation();

    return (
        <div>Element not found: {location.pathname}</div>
    )
}