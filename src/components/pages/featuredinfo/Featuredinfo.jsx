import "./featuredinfo.css";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

export default function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            $21,3
            <LoyaltyIcon />
          </span>
          <span className="featuredMoneyRate">
            -3.9
            <ArrowDownwardIcon />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sale</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            $100
            <LoyaltyIcon />
          </span>
          <span className="featuredMoneyRate">
            -9.9
            <ArrowDownwardIcon />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            $3,60
            <LoyaltyIcon />
          </span>
          <span className="featuredMoneyRate">
            -8,79
            <ArrowDownwardIcon />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
