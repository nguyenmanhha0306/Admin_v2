import "./sidebar.css";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import TimelineIcon from "@material-ui/icons/Timeline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PeopleIcon from "@material-ui/icons/People";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import ReceiptIcon from "@material-ui/icons/Receipt";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import EmailIcon from "@material-ui/icons/Email";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import MessageIcon from "@material-ui/icons/Message";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AirplayIcon from "@material-ui/icons/Airplay";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <PeopleIcon className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <RecentActorsIcon className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <ReceiptIcon className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <InsertChartIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <EmailIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MessageIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <AccountBalanceIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <AirplayIcon className="sidebarIcon" />
              Profile
            </li>
            <li className="sidebarListItem">
              <AssignmentLateIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
