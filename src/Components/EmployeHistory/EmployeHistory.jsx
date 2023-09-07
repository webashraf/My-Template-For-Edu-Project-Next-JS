'use client';

import { Checkbox, Table } from 'flowbite-react';
import './EmployeHistory.css'

const EmployeHistory = () => {
    return (
        <div className='grid grid-cols-2 gap-4 py-20'>
            <div>
                <h4 className='text-2xl font-serif py-2'>Teachers</h4>
                <div className='h-[40vh] overflow-y-scroll overflow-x-hidden'>
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell className="p-4">
                                <Checkbox />
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Profile Pic
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Name
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Category
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Price
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">
                                    Edit
                                </span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Apple MacBook Pro 17"
                                </Table.Cell>
                                <Table.Cell>
                                    Sliver
                                </Table.Cell>
                                <Table.Cell>
                                    Laptop
                                </Table.Cell>
                                <Table.Cell>
                                    $2999
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    <p>
                                        Microsoft Surface Pro
                                    </p>
                                </Table.Cell>
                                <Table.Cell>
                                    White
                                </Table.Cell>
                                <Table.Cell>
                                    Laptop PC
                                </Table.Cell>
                                <Table.Cell>
                                    $1999
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>            
            <div>
                <h4 className='text-2xl font-serif py-2'>Other Employ</h4>
                <div className='h-[40vh] overflow-y-scroll overflow-x-hidden'>
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell className="p-4">
                                <Checkbox />
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Profile Pic
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Name
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Category
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Price
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">
                                    Edit
                                </span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Apple MacBook Pro 17"
                                </Table.Cell>
                                <Table.Cell>
                                    Sliver
                                </Table.Cell>
                                <Table.Cell>
                                    Laptop
                                </Table.Cell>
                                <Table.Cell>
                                    $2999
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    <p>
                                        Microsoft Surface Pro
                                    </p>
                                </Table.Cell>
                                <Table.Cell>
                                    White
                                </Table.Cell>
                                <Table.Cell>
                                    Laptop PC
                                </Table.Cell>
                                <Table.Cell>
                                    $1999
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
            <div className='col-span-2'>
                <h4 className='text-2xl font-serif py-2'>Students</h4>
                <div className='h-[40vh] overflow-y-scroll overflow-x-hidden'>

                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell className="p-4">
                                <Checkbox />
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Profile Pic
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Name
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Category
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Price
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">
                                    Edit
                                </span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Apple MacBook Pro 17"
                                </Table.Cell>
                                <Table.Cell>
                                    Sliver
                                </Table.Cell>
                                <Table.Cell>
                                    Laptop
                                </Table.Cell>
                                <Table.Cell>
                                    $2999
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    <p>
                                        Microsoft Surface Pro
                                    </p>
                                </Table.Cell>
                                <Table.Cell>
                                    White
                                </Table.Cell>
                                <Table.Cell>
                                    Laptop PC
                                </Table.Cell>
                                <Table.Cell>
                                    $1999
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>
                                    Black
                                </Table.Cell>
                                <Table.Cell>
                                    Accessories
                                </Table.Cell>
                                <Table.Cell>
                                    $99
                                </Table.Cell>
                                <Table.Cell>
                                    <a
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        href="/tables"
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>

        </div>

    )
}

export default EmployeHistory;