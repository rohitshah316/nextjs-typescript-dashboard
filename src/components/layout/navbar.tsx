import { Bell, Search, User } from "lucide-react";



export function Navbar(){
    return(
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
            <h2 className="text-lg font-semibold">Dashboard</h2>

            <div className="flex items-center gap-4">
                <button
                    type="button"
                    aria-label="Search"
                ><Search className="h-5 w-5"/></button>
                <button type="button" aria-label="Notifications"><Bell className="h-5 w-5"/></button>
                <button type="button" aria-label="Profile"><User className="h-5 w-5"/></button>
            </div>
        </header>
    )
}