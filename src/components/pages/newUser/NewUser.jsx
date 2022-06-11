import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserFrom">
        <div className="newUserItem">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Nguyen Ha"></input>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Full name</label>
          <input type="text" placeholder="Nguyen Manh Ha"></input>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="ha030600@gmail.com"></input>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="password"></input>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Phone</label>
          <input type="phone" placeholder="+84 966 092 xxx"></input>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="TP HCM | VIET NAM"></input>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              placeholder="gender"
              id="male"
              value="male"
            ></input>
            <label for="male">Male</label>
            <input
              type="radio"
              placeholder="gender"
              id="female"
              value="female"
            ></input>
            <label for="female">Female</label>
            <input
              type="radio"
              placeholder="gender"
              id="other"
              value="other"
            ></input>
            <label for="other">Other</label>
          </div>
          <div className="newUserItem"></div>
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
