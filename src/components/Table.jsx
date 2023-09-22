'use client'
import { useTable, usePagination } from 'react-table'
// import Button from './Button'
import Pagination from './Pagination'

const Table = ({ data, columns }) => {
    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     page,
    //     gotoPage,
    //     setPageSize,
    //     state: { pageSize },
    //     prepareRow,
    // } = useTable(
    //     {
    //         columns,
    //         data,
    //         initialState: { pageIndex: 0 }, // Set initial page index
    //     },
    //     usePagination,
    // )


    // console.log(data)

    return (
        <>
            {/* <div className="relative overflow-x-auto">
                <table
                    {...getTableProps()}
                    className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        {headerGroups?.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        scope="col"
                                        className="px-6 py-3">
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page?.map(row => {
                            prepareRow(row)
                            return (
                                <tr
                                    {...row.getRowProps()}
                                    classNameName="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    {row.cells.map(cell => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                classNameName="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <Pagination
                gotoPage={gotoPage}
                length={data.length}
                pageSize={pageSize}
                setPageSize={setPageSize}
            /> */}
        </>
    )
}

export default Table
