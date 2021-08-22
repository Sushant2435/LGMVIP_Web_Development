const UserCard = ({ email, first_name, last_name, avatar }) => {
    return (
        <div className="card">
            <div className='row'>
                <div className='image'>
                    <img src={avatar} alt="Avatar" style={{width: "100%" ,height: "100%" }} />
                </div>
                <div className="text">
                    <span>
                        <b>{first_name + ' ' + last_name}</b>
                        <p className='email'>{email}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default UserCard;