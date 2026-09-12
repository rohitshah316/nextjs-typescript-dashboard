import { RevenueChart } from "@/components/charts/revenue-chart";
import StatsCard from "@/components/shared/stats-card";

import { stats } from "@/data/dashboard";


export default function DashboardPage() {

    return(
        <main className="space-y-6 p-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="mt-1 text-gray-600">Here is your business Dashboard</p>


          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat)=>(
                <StatsCard
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    change={stat.change}
                    trend={stat.trend}
                    icon={stat.icon}
                />
            ))}
          </div>

                <div className="rounded-xl border bg-white p-6">
        <h2 className="text-lg font-semibold">
          Revenue Overview
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Monthly revenue for this year
        </p>

        <div className="mt-6">
          <RevenueChart/>
        </div>
      </div>
        </main>
    )
}