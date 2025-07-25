"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const orders = [
  {
    id: "#1254",
    customer: "John Doe",
    date: "April 22, 2024",
    status: "Completed",
    amount: "$120.00",
  },
  {
    id: "#1253",
    customer: "Jane Smith",
    date: "April 21, 2024",
    status: "Pending",
    amount: "$250.00",
  },
  {
    id: "#1252",
    customer: "Michael Johnson",
    date: "April 20, 2024",
    status: "Completed",
    amount: "$180.00",
  },
 
];

export default function RecentOrders() {
  return (
    <Card className="rounded-2xl  border">
      <CardHeader className="pb-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">Recent Orders</CardTitle>
          <span className="text-sm text-blue-600 font-medium cursor-pointer">Detail</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm">
          <div className="grid grid-cols-5 font-medium text-muted-foreground py-1.5 border-b">
            <div>Order</div>
            <div>Customer</div>
            <div>Date</div>
            <div>Status</div>
            <div className="text-right">Amount</div>
          </div>
          {orders.map((order, idx) => (
            <div
              key={idx}
              className="grid grid-cols-5 py-2 border-b last:border-none items-center text-sm"
            >
              <div>{order.id}</div>
              <div>{order.customer}</div>
              <div>{order.date}</div>
              <div>
                <Badge
                  variant="outline"
                  className={
                    order.status === "Completed"
                      ? "text-green-600 border-green-400"
                      : "text-yellow-600 border-yellow-400"
                  }
                >
                  {order.status}
                </Badge>
              </div>
              <div className="text-right font-medium">{order.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
