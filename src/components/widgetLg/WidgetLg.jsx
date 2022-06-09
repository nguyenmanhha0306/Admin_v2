import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/564x/1f/81/ad/1f81ad1d772bc602bef3fcca7136d8e4.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">9 Jun 2022</td>
          <td className="widgetLgAmount">$199.05</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgUser">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/564x/1f/81/ad/1f81ad1d772bc602bef3fcca7136d8e4.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">9 Jun 2022</td>
          <td className="widgetLgAmount">$199.05</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgUser">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/564x/1f/81/ad/1f81ad1d772bc602bef3fcca7136d8e4.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">9 Jun 2022</td>
          <td className="widgetLgAmount">$199.05</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgUser">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/564x/1f/81/ad/1f81ad1d772bc602bef3fcca7136d8e4.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">9 Jun 2022</td>
          <td className="widgetLgAmount">$199.05</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
