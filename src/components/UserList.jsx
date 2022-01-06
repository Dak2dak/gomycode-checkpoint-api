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
                        {/* {user.address}  */}
                        <br />
                        <span><b>Phone</b><br /> {user.phone} </span>
                        <br />
                        <span><b>Website</b><br /> {user.website} </span>
                        <br />
                        {/* {user.company} */}
                    </li>)}
            </ul>
        </div>
    )
}

export default UserList;

