import { useEffect, useState } from "react";



export function usePagination<T>(items: T[],pageSize:number){
    const [page,setPage]=useState<number>(1);

    const totalPages=Math.ceil(items.length/pageSize);

    const startIndex=(page-1)*pageSize;

    const paginatedItems=items.slice(startIndex,startIndex+pageSize);

    const nextPage=()=>{
        setPage((prev)=>Math.min(prev+1,totalPages));
    }

    const previousPage=()=>{
        setPage((prev)=>Math.max(prev-1,1));
    };

    const gotToPage=(pageNumber:number)=>{
        setPage(Math.min(
            Math.max(pageNumber,1),
            totalPages
        ))
    }

    useEffect(()=>{
        setPage(1);
    },[items])

    return({page, totalPages, paginatedItems, nextPage,previousPage,gotToPage})
}