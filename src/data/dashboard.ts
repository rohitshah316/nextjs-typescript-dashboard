
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


export type Customer={
  id:string;
  name:string;
  email:string;
  status:"active"|"inactive";
  joinedAt:string;
}

export type Product={
  id:string;
  name:string;
  category:string;
  price:number;
  stock:number;
  status:"in-stock"|"low-stock"|"out-of-stock";
}

export type Order={
  id:string;
  customerId:string;
  productId:string;
  quantity:number;
  total:number;
  status:"pending"|"processing"|"completed"|"cancelled";
  orderedAt:string;
}
export type RevenueData={
    month:string;
    revenue:number;
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



export const revenueData: RevenueData[] = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 28000 },
  { month: "Jun", revenue: 24000 },
  { month: "Jul", revenue: 32000 },
  { month: "Aug", revenue: 36000 },
  { month: "Sep", revenue: 31000 },
  { month: "Oct", revenue: 39000 },
  { month: "Nov", revenue: 42000 },
  { month: "Dec", revenue: 48000 },
];


export const customers: Customer[] = [
  {
    id: "cus_001",
    name: "Alex Shrestha",
    email: "alex@gmail.com",
    status: "active",
    joinedAt: "Jan 12, 2026",
  },
  {
    id: "cus_002",
    name: "Ani Rai",
    email: "ani@example.com",
    status: "active",
    joinedAt: "Feb 03, 2026",
  },
  {
    id: "cus_003",
    name: "Rohit Shah",
    email: "rohit@example.com",
    status: "inactive",
    joinedAt: "Feb 18, 2026",
  },
  {
    id: "cus_004",
    name: "Aayushman",
    email: "aayushman@example.com",
    status: "active",
    joinedAt: "Mar 05, 2026",
  },
  {
    id: "cus_005",
    name: "Tapen Baduwal",
    email: "tapen@example.com",
    status: "inactive",
    joinedAt: "Mar 21, 2026",
  },
];




export const products: Product[] = [
  {
    id: "prod_001",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 89.99,
    stock: 42,
    status: "in-stock",
  },
  {
    id: "prod_002",
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 129.99,
    stock: 8,
    status: "low-stock",
  },
  {
    id: "prod_003",
    name: "Running Shoes",
    category: "Footwear",
    price: 74.99,
    stock: 0,
    status: "out-of-stock",
  },
  {
    id: "prod_004",
    name: "Travel Backpack",
    category: "Accessories",
    price: 59.99,
    stock: 23,
    status: "in-stock",
  },
  {
    id: "prod_005",
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 5,
    status: "low-stock",
  },
  {
    id: "prod_006",
    name: "Cotton Hoodie",
    category: "Clothing",
    price: 44.99,
    stock: 31,
    status: "in-stock",
  },
];


export const orders: Order[] = [
  {
    id: "ord_001",
    customerId: "cus_001",
    productId: "prod_001",
    quantity: 1,
    total: 89.99,
    status: "completed",
    orderedAt: "Apr 02, 2026",
  },
  {
    id: "ord_002",
    customerId: "cus_002",
    productId: "prod_002",
    quantity: 2,
    total: 259.98,
    status: "processing",
    orderedAt: "Apr 05, 2026",
  },
  {
    id: "ord_003",
    customerId: "cus_003",
    productId: "prod_004",
    quantity: 1,
    total: 59.99,
    status: "pending",
    orderedAt: "Apr 07, 2026",
  },
  {
    id: "ord_004",
    customerId: "cus_004",
    productId: "prod_005",
    quantity: 1,
    total: 199.99,
    status: "completed",
    orderedAt: "Apr 10, 2026",
  },
  {
    id: "ord_005",
    customerId: "cus_005",
    productId: "prod_006",
    quantity: 3,
    total: 134.97,
    status: "cancelled",
    orderedAt: "Apr 12, 2026",
  },
  {
    id: "ord_006",
    customerId: "cus_001",
    productId: "prod_003",
    quantity: 1,
    total: 74.99,
    status: "processing",
    orderedAt: "Apr 15, 2026",
  },
];
