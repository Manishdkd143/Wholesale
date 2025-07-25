"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const products = [
  {
    name: "Wireless Earbuds",
    image: "/products/earbuds.png",
    sold: 320,
    revenue: 240000,
    trending: "up",
  },
  {
    name: "Smart Watch",
    image: "/products/smartwatch.png",
    sold: 215,
    revenue: 180000,
    trending: "up",
  },
  {
    name: "Earphone",
    image: "/products/earphone.png",
    sold: 140,
    revenue: 100000,
    trending: "down",
  },
];

export default function TopSellingProducts() {
  return (
    <Card className="w-full h-full max-w-3xl mx-auto  rounded-2xl p-0">
      <CardHeader className="pb-0 p-1">
        <CardTitle className="text-lg font-semibold ml-4 mt-2">Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center  justify-between rounded-lg px-2 py-2 hover:bg-muted/40 transition-all p-0"
          >
            {/* Left: Avatar + Name */}
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={product.image} alt={product.name} />
                <AvatarFallback>{product.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-xs text-muted-foreground">
                  {product.sold} units sold
                </p>
              </div>
            </div>

            {/* Right: Revenue + Trend */}
            <div className="text-right">
              <p className="font-semibold text-sm text-foreground">
                ₹{product.revenue.toLocaleString()}
              </p>
              <div className="flex justify-end">
                <Badge
                  variant="outline"
                  className={`flex items-center gap-1 mt-1 px-2 py-0.5 text-xs font-medium ${
                    product.trending === "up"
                      ? "text-green-600 border-green-500"
                      : "text-red-600 border-red-500"
                  }`}
                >
                  {product.trending === "up" ? (
                    <>
                      <ArrowUpRight className="h-3 w-3" />
                      Up
                    </>
                  ) : (
                    <>
                      <ArrowDownRight className="h-3 w-3" />
                      Down
                    </>
                  )}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
