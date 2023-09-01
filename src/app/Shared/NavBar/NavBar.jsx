'use client';

import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import './NavBar.css'
const NavBar = () => {
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href="https://flowbite-react.com">
                <h2 className='text-2xl font-serif uppercase text-blue-900'>Bornomala-edu</h2>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    inline
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <li>
                        Dashboard
                    </li>
                    <li>
                        Settings
                    </li>
                    <li>
                        Earnings
                    </li>
                    <Dropdown.Divider />
                    <li>
                        Sign out
                    </li>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="#"
                >
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                    About
                </Navbar.Link>
                <Navbar.Link href="#">
                    Services
                </Navbar.Link>
                <Navbar.Link href="#">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="#">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;