import "./user.css";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import CakeIcon from "@material-ui/icons/Cake";
import PublishIcon from "@material-ui/icons/Publish";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit user</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://i.pinimg.com/564x/36/63/84/36638418002581131728ea6b22667362.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Róse</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowButton">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfor">
              <PermContactCalendarIcon className="userShowIcon" />
              <span className="userShowInfoTitle">rose03</span>
            </div>
            <div className="userShowInfor">
              <CakeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">03-06-2000</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfor">
              <EmailIcon className="userShowIcon" />
              <span className="userShowInfoTitle">rose@gmail.com</span>
            </div>
            <div className="userShowInfor">
              <PhoneInTalkIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+84 12321 2332</span>
            </div>
            <div className="userShowInfor">
              <RoomIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Seoul | Korea</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <from className="userUpdateFrom">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="rose03"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Róse"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="rose@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+84 12321 2332"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Seoul | Korea"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://i.pinimg.com/564x/11/44/eb/1144eb0350f0a182775d3932a3d017c0.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <PublishIcon />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
            </div>
          </from>
        </div>
      </div>
    </div>
  );
}
