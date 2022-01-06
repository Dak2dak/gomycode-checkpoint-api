import React from 'react'

const UserList = ({listOfUser}) => {

    return (
        <div>
            <ul className="list-group">
                {listOfUser.map((user) => 
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span><b>Name</b><br /> {user.name} </span>
                        <br />
                        <span><b>Username</b><br /> {user.username} </span>
                        <br />
                        <span><b>Email</b><br /> {user.email} </span>
                        <br />
                        <span><b>street</b><br /> {user.address.street} </span>
                        <br />
                        <span><b>suite</b><br /> {user.address.suite} </span>
                        <br />
                        <span><b>city</b><br /> {user.address.city} </span>
                        <br />
                        <span><b>zipcode</b><br /> {user.address.zipcode} </span>
                        <br />
                        <span><b>Phone</b><br /> {user.phone} </span>
                        <br />
                        <span><b>Website</b><br /> {user.website} </span>
                        <br />
                        <span><b>Company name</b><br /> {user.company.name} </span>
                        <br />
                        <span><b>catchPhrase</b><br /> {user.company.catchPhrase} </span>
                        <br />
                        <span><b>bs</b><br /> {user.company.bs} </span>
                    </li>)}
            </ul>
        </div>
    )
}

export default UserList;

