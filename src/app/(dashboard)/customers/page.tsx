import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/ui/data-table";
import { customers } from "@/data/dashboard";
import Link from "next/link";

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

        {/* <div className="rounded-xl border bg-white">
            {customers.map((customer)=>(
                <div 
                    key={customer.id}
                    className="flex items-center justify-between border-b p-4 last:border-b-0"
                >
                    <div>
                        <p className="font-medium">
                            {customer.name}
                        </p>
                        <p className="text-sm text-gray-500">
                        {customer.email}
                        </p>
                    </div>

                    <span className="text-sm">
                        {customer.status}
                    </span>
                </div>
            ))}
        </div> */}


        <DataTable>
            <thead>
                <tr className="border-b bg-gray-50">
                    <th className="px-4 py-3 font-medium">
                        Customer
                    </th>
                    <th className="px-4 py-3 font-medium">
                        Email
                    </th>
                    <th className="px-4 py-3 font-medium">
                        Status
                    </th>
                    <th className="px-4 py-3 font-medium">
                        Joined
                    </th>
                </tr>
            </thead>

            <tbody>
                {customers.map((customer)=>(
                    <tr
                        key={customer.id}
                        className="border-b last:border-b-0"
                    >
                        <td className="px-4 py-3 font-medium">

                            <Link href={`/customers/${customer.id}`}>{customer.name}</Link>
                        </td>
                        <td className="px-4 py-3 text-gray-500">{customer.email}</td>
                        <td className="px-4 py-3"><Badge variant={
                            customer.status==="active"?"success":"danger"
                        }>{customer.status}</Badge></td>
                        <td className="px-4 py-3 text-gray-500">{customer.joinedAt}</td>
                    </tr>
                ))}
            </tbody>
        </DataTable>
    </div>
  );
}
