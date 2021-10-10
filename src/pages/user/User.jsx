import './user.css'
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@material-ui/icons";
import {Link} from "react-router-dom";

const User = () => {
    return (
        <div className={'user'}>
            <div className="userTitleContainer">
                <h1 className={'userTitle'}>
                    Edit User
                </h1>
                <Link to={'/newUser'}>
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg"
                            alt="" className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">
                                Anna Backer
                            </span><
                            span className="userShowUserTitle">
                                Software Engineer
                            </span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                    <span className="userShowTitle">
                        Account Details
                    </span>
                        <div className="userShowInfo">
                            <PermIdentity className={'userShowIcon'}/>
                            <span className="userShowInfoTitle">
                        codertjay
                        </span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className={'userShowIcon'}/>
                            <span className="userShowInfoTitle">
                        10.12.1999
                        </span>
                        </div>
                        <span className="userShowTitle">
                        Contact Details
                    </span>
                        <div className="userShowInfo">
                            <PhoneAndroid className={'userShowIcon'}/>

                            <span className="userShowInfoTitle">
                        +2348061715291
                        </span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className={'userShowIcon'}/>
                            <span className="userShowInfoTitle">
                        codertjay@gmail.com
                        </span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className={'userShowIcon'}/>
                            <span className="userShowInfoTitle">
                        Nigeria | Lagos
                        </span>
                        </div>

                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">
                        Edit
                    </span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder={'Codertjay'}
                                       className={'userUpdateInput'}/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder={'Afenikhena Favour'}
                                       className={'userUpdateInput'}/>
                            </div>
                            <div className="userUpdateItem">
                                <label>DOB</label>
                                <input type="date" placeholder={'Afenikhena Favour'}
                                       className={'userUpdateInput'}/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email" placeholder={'Codertjay@gmail.com'}
                                       className={'userUpdateInput'}/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder={'+2348061715291'}
                                       className={'userUpdateInput'}/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder={'Nigeria | Lagos'}
                                       className={'userUpdateInput'}/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    src="https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg"
                                    className={'userUpdateImg'}
                                    alt=""/>
                                <label htmlFor="file"><Publish
                                    className={'userUpdateIcon'}
                                /></label>
                                <input type="file" id={'file'} style={{display: "none"}}/>
                            </div>
                            <button className="userUpdateButton">
                                Upload
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}
export default User