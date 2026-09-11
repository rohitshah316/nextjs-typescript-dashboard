


export default function Sidebar(){
    return(
        <aside className="w-64 border-r bg-white p-6">
            <h1 className="mb-8 text-xl font-bold">Analytics</h1>
            <nav className="space-y-2">
                <p className="rounded-md bg-gray-200 px-3 py-2 ">Dashboard</p>
                <p className="rounded-md px-3 py-2 ">Customers</p>
                <p className="rounded-md px-3 py-2 ">Products</p>
                <p className="rounded-md px-3 py-2 ">Orders</p>
                <p className="rounded-md px-3 py-2 ">Settings</p>
            </nav>
        </aside>
    )
}