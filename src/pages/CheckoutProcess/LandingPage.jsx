import { Link } from 'react-router-dom'

export default () => {
    return (
        <div className="content">
            <ul>
                <li>Please click each link below to view the pages</li>
                <li>
                    <Link to="/">Home Complete your Purchase</Link>
                </li>
                <li>
                    <Link to="/billing-info">BILLING INFO PAGE</Link>
                </li>
                <li>
                    <Link to="/confirm-payment">CONFIRM PAYMENT PAGE</Link>
                </li>
                <li>
                    <Link to="/profile-info">PROFILE INFO PAGE</Link>
                </li>
                <li>
                    <Link to="/purchase-completed">PURCHASE COMPLETED PAGE</Link>
                </li>
            </ul>
        </div>
    )
}