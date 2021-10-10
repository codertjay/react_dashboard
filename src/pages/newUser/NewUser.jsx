import './newUser.css'

const NewUser = () => {
    return (
        <div className={'newUser'}>
            <h1 className="newUserTitle">
                New User
            </h1>
            <form className={''}>
                <div className="newUserForm">
                    <div className="newUserItem">
                        <label>Username</label>
                        <input type="text" placeholder={'Codertjay'}/>
                    </div>
                    <div className="newUserItem">
                        <label>Full Name</label>
                        <input type="text" placeholder={'Afenikhena Favour'}/>
                    </div>
                    <div className="newUserItem">
                        <label>Email</label>
                        <input type="email" placeholder={'Coderjay@gmail.com'}/>
                    </div>
                    <div className="newUserItem">
                        <label>Password</label>
                        <input type="password" placeholder={'Password'}/>
                    </div>
                    <div className="newUserItem">
                        <label>Phone</label>
                        <input type="text" placeholder={'234806171521'}/>
                    </div>
                    <div className="newUserItem">
                        <label>Address</label>
                        <input type="text" placeholder={'Nigeria | lagos'}/>
                    </div>
                    <div className="newUserItem">
                        <label>Gender</label>
                        <div className="newUserGender">
                            <input type="radio" name={'gender'} id={'male'}
                                   value={'male'}/>
                            <label htmlFor="male">Male</label>
                            <input type="radio" name={'gender'} id={'female'}
                                   value={'female'}/>
                            <label htmlFor="female">Female</label>
                            <input type="radio" name={'gender'} id={'other'}
                                   value={'other'}/>
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                    <div className="newUserItem">
                        <label>Active</label>
                        <select name="active" id="active" className={'newUserSelect'}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <button className="newUserButton">Create</button>
            </form>

        </div>
    )
}
export default NewUser