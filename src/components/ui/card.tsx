

type CardProps={
    children:React.ReactNode;
}


export function Card({children}:CardProps){
    return(
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            {children}
        </div>
    )
}