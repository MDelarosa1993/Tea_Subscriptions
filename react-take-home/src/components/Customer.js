import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './Customer.css'

function Customer(){
    const { id } = useParams();
    const [customer, setCustomer] = useState(null)

    function fetchCustomer() {
        fetch(`http://localhost:3000/api/v1/customers/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            return setCustomer(data.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchCustomer()
    }, [])

    return (
        <>
        <div className="title">
            <h1>Profile</h1>
        </div>
        <div className="customer-profile-container">
            {customer ? (
                <div className="customer-profile">
                    <img 
                        src="data:image/jpeg;base64,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" 
                        alt="Customer Profile"
                        className="customer-profile-image"
                    />
                    <div className="customer-profile-info">
                        <h2>{`${customer.attributes.first_name} ${customer.attributes.last_name}`}</h2>
                        <p>Email: {customer.attributes.email}</p>
                        <p>Address: {customer.attributes.address}</p>
                    </div>
                    <Link to="/" className="back-link">
                        <button>Back to Subscriptions</button>
                    </Link>
                </div>
            ) : (
                <p>Loading customer data...</p>
            )}
        </div>
        </>
    );
}

export default Customer;