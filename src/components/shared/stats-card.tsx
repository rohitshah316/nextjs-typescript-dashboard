import { ArrowDownRight, ArrowUpRight, LucideIcon } from "lucide-react";


type StatsCardProps = {
    title: string;
    value: string;
    change: string;
    trend: "up" | "down";
    icon: LucideIcon
};

export default function StatsCard({ title, value, change, trend, icon: Icon }: StatsCardProps) {

    const TrendIcon = trend === "up" ? ArrowUpRight : ArrowDownRight
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-gray-100 p-2">
                        <Icon className="h-5 w-5 text-gray-600" />

                    </div>
                    <p className="text-sm text-gray-500">
                        {title}
                    </p>
                </div>


                <div>
                    <p className="mt-2 text-2xl font-bold">
                        {value}
                    </p>


                    <div className={`flex items-center mt-2   text-sm ${trend==="up"?"text-green-600":"text-red-600"}`}>
                        <TrendIcon className="h-4 w-4"/>
                        <span>{change}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
