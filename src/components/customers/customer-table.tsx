"use client"

type CustomerStatus="active"|"inactive";
type CustomerStatusFilter= |"all"| CustomerStatus;


import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/ui/data-table";
import Link from "next/link";
import { useEffect, useState } from "react";
import type {Customer} from '../../data/dashboard'

type CustomerTableProps={
  customers: Customer[]
}

export function CustomerTable({customers}:CustomerTableProps){

    const [search,setSearch]=useState<string>("");
    const [status,setStatus]=useState<CustomerStatusFilter>("all");
    const [page,setPage]=useState<number>(1);

    const pageSize=2;

   

    const filteredCustomers=customers.filter((customer)=>{
        const searchTerm=search.toLowerCase();

        const matchesSearch=customer.name.toLowerCase().includes(searchTerm)||
            customer.email.toLowerCase().includes(searchTerm)

        const matchesStatus=
        status==="all"||
        customer.status===status;

        return matchesSearch && matchesStatus;
    });


     const totalPages=Math.ceil(filteredCustomers.length/pageSize);
     const startIndex=(page-1)*pageSize;

     const paginatedCustomers=filteredCustomers.slice(
      startIndex,startIndex+pageSize
     )


     useEffect(()=>{
      setPage(1)
     },[search,status])
    const handleStatusChange=(
      e:React.ChangeEvent<HTMLSelectElement>
    )=>{
      setStatus(e.target.value as CustomerStatusFilter)
    }
    return(
        <div>
          <div className="flex flex-col md:flex-row gap-4 mb-4 ">
              <div>
              <input type="text" 
                value={search}
                className="border p-2 rounded-2xl w-50"
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search customers..."
            />
            <p>Search:{search}</p>
            </div>

              
        <select 
        value={status}
        onChange={handleStatusChange}
        className="rounded-lg h-10 border w-40"

        >

          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
          </div>

{filteredCustomers.length === 0 ? (
  <div className="rounded-xl border bg-white p-8 text-center">
    <p className="font-medium">
      No customers found
    </p>

    <p className="mt-1 text-sm text-gray-500">
      Try searching with a different name or email.
    </p>
  </div>
) : (
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
    {paginatedCustomers.map((customer) => (
      <tr
        key={customer.id}
        className="border-b last:border-b-0"
      >
        <td className="px-4 py-3 font-medium">
          <Link
            href={`/customers/${customer.id}`}
            className="hover:underline"
          >
            {customer.name}
          </Link>
        </td>

        <td className="px-4 py-3 text-gray-500">
          {customer.email}
        </td>

        <td className="px-4 py-3">
          <Badge
            variant={
              customer.status === "active"
                ? "success"
                : "danger"
            }
          >
            {customer.status}
          </Badge>
        </td>

        <td className="px-4 py-3 text-gray-500">
          {customer.joinedAt}
        </td>
      </tr>
    ))}
  </tbody>
</DataTable>
)}
  {filteredCustomers.length>0 && (
    <>
    <div className="flex items-center gap-2 justify-center">
  {Array.from({ length: totalPages }, (_, index) => {
    const pageNumber = index + 1;

    return (
      <button
        key={pageNumber}
        onClick={() => setPage(pageNumber)}
        className={` text-white px-2 mt-2 rounded-sm
            ${pageNumber===page?'bg-green-600':'bg-black'}
          `}
      >
        {pageNumber}
      </button>
    );
  })}
</div>

<div className="flex items-center justify-between">
  <button onClick={()=>setPage(prev=>prev-1)} 
    disabled={page===1} 
    className="border-2 rounded-2xl mt-2 py-2 px-2 bg-black text-white cursor-pointer"
    >Previous</button>

    <span>
    Page {page} of {totalPages}
  </span>

  <button
    onClick={() => setPage(prev=>prev + 1)}
    disabled={page === totalPages} 
    className="border-2 rounded-2xl mt-2 py-2 px-2 bg-black text-white cursor-pointer"
  >
    Next
  </button>
</div>
    </>
  )}

    
        </div>
    )
}