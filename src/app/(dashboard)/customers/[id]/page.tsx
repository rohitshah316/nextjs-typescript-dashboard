import { customers } from "@/data/dashboard";
import { notFound } from "next/navigation";

type CustomerPageProps={
    params:Promise<{
        id:string;
    }>;
};

export default async function CustomerPage({params}:CustomerPageProps){

    const {id}=await params;

    const customer=customers.find(
        (customer)=>customer.id===id

        
    );

    if(!customer){
            notFound();
        }


    return(
       <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">
          {customer.name}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          {customer.email}
        </p>
      </div>

      <div className="rounded-xl border bg-white p-6">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">
              Customer ID
            </p>

            <p className="font-medium">
              {customer.id}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Status
            </p>

            <p className="font-medium">
              {customer.status}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Joined
            </p>

            <p className="font-medium">
              {customer.joinedAt}
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}