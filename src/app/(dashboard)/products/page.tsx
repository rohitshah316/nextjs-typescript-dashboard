import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { products } from "@/data/dashboard";




const ProductPage = () => {
    return (
        <div className="space-y-6 p-6">
            <div>
                <h1 className="text-2xl font-bold">
                    Products
                </h1>
                <p className="mt-1 text-gray-500">
                    Manage your products and inventory.
                </p>

                <p className="mt-2 text-gray-400">
                    {products.length} products
                </p>

            </div>

            <Button>Add Product</Button>

            <DataTable>
                <thead>
                    <tr className="border-b bg-gray-50">
                        <th className="px-4 py-3 font-medium">
                            Product
                        </th>
                        <th className="px-4 py-3 font-medium">
                            Category
                        </th>
                        <th className="px-4 py-3 font-medium">
                            Price
                        </th>
                        <th className="px-4 py-3 font-medium">
                            Stock
                        </th>
                        <th className="px-4 py-3 font-medium">
                            Status
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}
                            className="border-b last:border-b-0"
                        >
                            <td className="px-4 py-3 font-medium">
                                {product.name}
                            </td>
                            <td className="px-4 py-3 text-gray-500">
                                {product.category}
                            </td>
                            <td className="px-4 py-3">
                                ${product.price.toFixed(2)}
                            </td>
                            <td className="px-4 py-3">
                                {product.stock}
                            </td>
                            <td className="px-4 py-3">

                                <Badge
                                    variant={
                                        product.status === "in-stock" ? "success" : product.status === "low-stock" ? "warning" : "danger"
                                    }
                                >{product.status === "in-stock"
                                    ? "In Stock"
                                    : product.status === "low-stock"
                                        ? "Low Stock"
                                        : "Out of Stock"}
                                </Badge>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </DataTable>
        </div>
    )
}

export default ProductPage