import * as React from 'react';
import { Link } from 'gatsby';
import type { NavbarContent } from '@/types/navbar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    const content: NavbarContent = {
        title: "My Portfolio",
        contact_buttons: [
            {
                name: "github",
                link: "github.com"
            },
            {
                name: "linkedin",
                link: "linkedin.com/in"
            }
        ]
    }

    return <body className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">{content.title}</h1>
            <nav className="flex justify-between border-t pt-4">
                <div className='space-x-4'>
                    <Link to="/">Home</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/experiences">Experiences</Link>
                </div>
                <div className='space-x-4'>
                    {content.contact_buttons.map((button) => (
                        <a
                            href={button.link}
                            target='blank'>
                            {button.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>

        {/* Body */}
        <main className="flex-1 p-6 bg-gray-100">
            {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
            &copy; 2025 My Portfolio
        </footer>
    </body>
}

export default HomeLayout