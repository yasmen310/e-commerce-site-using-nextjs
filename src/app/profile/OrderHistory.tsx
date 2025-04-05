import { getOrderHistory } from "../lib/orders";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

export default async function OrderHistory() {
  const orders = await getOrderHistory();

  return (
    <div>
      <h2 className="h4 text-dark mb-3">Order History</h2>
      <ul className="list-group">
        {orders.map((order: any) => (
          <li key={order.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span className="fw-bold">Order #{order.id}</span>
            <span className="text-success fw-semibold">${order.total}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
