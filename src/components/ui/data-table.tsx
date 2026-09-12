type DataTableProps={
    children:React.ReactNode;
};


export function DataTable({children}:DataTableProps){
    return(
        <div className="overflow-x-auto rounded-xl border bg-white">
            <table className="w-full text-left text-sm">
                {children}
            </table>
        </div>
    )
}