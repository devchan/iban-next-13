'use client'
import { usePaginationPages } from "@/hooks/usePaginationPages";
import { useState, useEffect, memo } from "react";
import Button from "./Button";


const Pagination = ({ gotoPage, length, pageSize, setPageSize }) => {
    const [perPage, setPerPage] = useState(pageSize);

    const {
      canGo,
      currentPage,
      pages,
      goTo,
      goNext,
      goPrev
    } = usePaginationPages({
      gotoPage,
      length,
      pageSize
    });
  
    useEffect(() => {
      setPageSize(Number(perPage));
    }, [perPage, setPageSize]);
  
  return (
    <div className="flex items-center justify-center py-6">
      <Button
        onClick={goPrev}
        disabled={!canGo.previous}
        className="m-1 px-2 py-1 border rounded-md"
      >
        Back
      </Button>
      {pages.map((page, i) => (
        <Button
          onClick={() => goTo(page)}
          key={i}
          style={{
            background: currentPage === page ? "#525252" : "none",
            color: currentPage === page ? "white" : "black"
          }}
          className="m-1 px-3 py-1 border rounded-md"
        >
          {page}
        </Button>
      ))}
      <Button
        onClick={goNext}
        disabled={!canGo.next}
        className="m-1 px-2 py-1 border rounded-md"
      >
       Next
      </Button>
      
    </div>
  )
}

export default memo(Pagination)