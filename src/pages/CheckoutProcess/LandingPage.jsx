import { Link } from 'react-router-dom'

export default () => {
    return (
        <div className="content">
            <ul>
                <li>Please click each link below to view the pages</li>

                <li >
                    <Link className="text-2xl underline text-purple" to="/billing-info">BILLING INFO PAGE</Link>
                </li>
                <li>
                    <Link className="text-2xl underline text-purple" to="/confirm-payment">CONFIRM PAYMENT PAGE</Link>
                </li>
                <li>
                    <Link className="text-2xl underline text-purple" to="/profile-info">PROFILE INFO PAGE</Link>
                </li>
                <li>
                    <Link className="text-2xl underline text-purple" to="/purchase-completed">PURCHASE COMPLETED PAGE</Link>
                </li>
            </ul>
        </div>
    )
}