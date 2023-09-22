import Head from 'next/head'
import Layout from '@/pages/Layout'
import axios from '@/lib/axios'
// import useSWR from 'swr'

import Table from '@/components/Table'
import { CONFIG_FILES } from 'next/dist/shared/lib/constants'
import { useEffect, useState } from 'react'

const adminDashboard = () => {
    const [ibanData, setIbanData] = useState([])



    const fetchData = async () => {
        const csrf = () => axios.get(`/sanctum/csrf-cookie`)
        const url = `/api/iban-numbers`

        await csrf()
        axios
            .get(url)
            .then((data) => {
                setIbanData(data)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                // setErrors(error.response.data.errors)
            })


    }

    useEffect(() => {
        fetchData();
    }, [])




    const data = ibanData.data






    // const data = [
    //     {
    //         "id": 2,
    //         "iban_number": "AD1400080001001234567890",
    //         "created_at": "2023-09-22T04:48:12.000000Z",
    //         "updated_at": "2023-09-22T04:48:12.000000Z"
    //     },
    //     {
    //         "id": 1,
    //         "iban_number": "AD1400080001001234567890",
    //         "created_at": "2023-09-22T04:20:29.000000Z",
    //         "updated_at": "2023-09-22T04:20:29.000000Z"
    //     }
    // ]



    const columns = [
        { Header: 'ID', accessor: 'id' },
        { Header: 'IBAN_NUMBER', accessor: 'iban_number' },
        // Add more columns here
    ];





    return (
        <Layout>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-6 pt-6">
                        <Table data={data} columns={columns} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default adminDashboard
