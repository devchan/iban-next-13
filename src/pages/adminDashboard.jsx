import Head from 'next/head'
import Layout from '@/pages/Layout'
import axios from 'axios'
import useSWR from 'swr'

import Table from '@/components/Table'

const adminDashboard = () => {
    const fetchData = () => {
        const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/iban-numbers`
        const { data: users, error, mutate } = useSWR(URL, () =>
            axios
                .get(URL)
                .then(res => res)
                .catch(error => {
                    if (error.response.status !== 409) throw error
                }),
        )
    }


    const data = [
        { id: 1, iban: 'John Doe', age: 30 },
        { id: 2, iban: 'Jane Smith', age: 25 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
        { id: 3, iban: 'Bob Johnson', age: 35 },
      ];

      const columns = [
        { Header: 'ID', accessor: 'id' },
        { Header: 'IBAN', accessor: 'iban' },
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
