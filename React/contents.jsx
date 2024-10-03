function MyContacts(props) {
    return (
        <div>
            <p>Email: { props.email }</p>
            <p>Phone Number: { props.num }</p>
            <p>Company address: { props.address }</p>
        </div>
    );
}

export default MyContacts;