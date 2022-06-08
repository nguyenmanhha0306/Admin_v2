import "./sidebar.css";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import TimelineIcon from "@material-ui/icons/Timeline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyleIcon />
              Home
            </li>
            <li className="sidebarListItem">
              <TimelineIcon />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
