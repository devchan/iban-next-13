'use client'
import Layout from '@/Layout'
import Button from '@/components/Button'
import InputError from '@/components/InputError'
import SuccessMessage from '@/components/SuccessMessage'
import axios from '@/lib/axios'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const Dashboard = () => {
    const [ibnText, setIbnText] = useState('')
    const [errors, setErrors] = useState([])
    const [successMessage, setSuccessMessage] = useState('')

    const inputChange = (e) => {
        setErrors([])
        setIbnText(e.target.value)
        setSuccessMessage('')
    }

    const ibnHandler = async () => {
        const csrf = () => axios.get(`/sanctum/csrf-cookie`)
        const url = `/api/iban-number-checker`

            await csrf()
            axios
                .post(url, {
                    iban_number : ibnText
                })
                .then(({ data }) => {
                    setSuccessMessage(data.message)
                })
                .catch(error => {
                    if (error.response.status !== 422) throw error

                    setErrors(error.response.data.errors)
                })


    }

    return (
        <Layout>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 flex flex-col">

                            <div className='wrap-input flex w-[90%]'>
                                <input type="text" onChange={(e) => inputChange(e)} name='iban_number' value={ibnText} id="iban_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your IBAN Number" required />

                                <Button onClick={ibnHandler} className={'w-10%'}>check</Button>
                            </div>

                            <SuccessMessage message={successMessage} className="mt-2" />
                            <InputError messages={errors.iban_number} className="mt-2" />

                           
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard
