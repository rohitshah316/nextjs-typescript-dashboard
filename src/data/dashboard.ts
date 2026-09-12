
import {
  DollarSign,
  ShoppingCart,
  Users,
  RotateCcw,
  LucideIcon,
} from "lucide-react";


export type Stat={
    title:string;
    value:string;
    change:string;
    trend:"up"|"down";
    icon:LucideIcon;
}

export const stats: Stat[] = [
  {
    title: "Total Revenue",
    value: "$24,500",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Orders",
    value: "1,249",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    value: "8,420",
    change: "+15.4%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Refunds",
    value: "$2,340",
    change: "-3.4%",
    trend: "down",
    icon: RotateCcw,
  },
];
