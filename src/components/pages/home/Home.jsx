import Chart from "../../chart/Chart";
import Featuredinfo from "../featuredinfo/Featuredinfo";
import "./home.css";
import { UserData } from "../../../dummyData";
import WidgetLg from "../../widgetLg/WidgetLg";
import WidgetSm from "../../widgetSm/WidgetSm";

export default function Home() {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart
        data={UserData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
