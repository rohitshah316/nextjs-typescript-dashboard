import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/ui/data-table";
import { customers, orders, products } from "@/data/dashboard";

const OrderPage = () => {
    return (
        <div className="space-y-6 p-6">
            <div>
                <h1 className="text-2xl font-bold">
                    Orders
                </h1>
                <p className="mt-1 text-gray-400">
                    {orders.length} orders
                </p>
            </div>

            <DataTable>
                <thead>
                    <tr className="border-b bg-gray-50">
                        <th className="px-4 py-3 font-medium">
                            Order
                        </th>

                        <th className="px-4 py-3 font-medium">
                            Customer
                        </th>

                        <th className="px-4 py-3 font-medium">
                            Product
                        </th>

                        <th className="px-4 py-3 font-medium">
                            Quantity
                        </th>

                        <th className="px-4 py-3 font-medium">
                            Total
                        </th>

                        <th className="px-4 py-3 font-medium">
                            Status
                        </th>

                        <th className="px-4 py-3 font-medium">
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order)=>{
                        const customer=customers.find(
                            (customer)=>customer.id===order.customerId
                        );

                        const product=products.find(
                            (product)=>product.id===order.productId
                        );

                        return(
                            <tr key={order.id}
                            className="border-b last:border-b-0"
                            >
                                <td className="px-4 py-3 font-meidum">
                                    {order.id}
                                </td>

                                <td className="px-4 py-3">
                                    {customer?.name}
                                </td>

                                <td className="px-4 py-3">
                                    {product?.name}
                                </td>

                                <td className="px-4 py-3">
                                    {order.quantity}
                                </td>
                                <td className="px-4 py-3">
                                    ${order.total.toFixed(2)}
                                </td>
            <td className="px-4 py-3">
                  <Badge
                    variant={
                      order.status === "completed"
                        ? "success"
                        : order.status === "cancelled"
                          ? "danger"
                          : order.status === "processing"
                            ? "warning"
                            : "danger"
                    }
                  >
                    {order.status}
                  </Badge>
                </td>

                <td className="px-4 py-3 text-gray-500">
                  {order.orderedAt}
                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </DataTable>
        </div>
    )
}

export default OrderPage