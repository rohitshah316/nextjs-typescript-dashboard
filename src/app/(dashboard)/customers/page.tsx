import { CustomerTable } from "@/components/customers/customer-table";
import { customers } from "@/data/dashboard";

export default function CustomersPage() {
  return (
    <div className="space-y-6 p-6">
        <div>
            <h1 className="text-2xl font-bold">Customers</h1>

            <p className="mt-1 text-gray-500">
                Manage your customers and their account status.
            </p>

            <p className="text-sm text-gray-500">
  {customers.length} customers
</p>
        </div>

        <CustomerTable customers={customers}/>
    </div>
  );
}
