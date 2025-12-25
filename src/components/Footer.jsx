import React from 'react'
import { FaYoutube, FaTelegram, FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    id: 1,
    path: "/",
    icon: <FaInstagram className="text-2xl" />,
  },
  {
    id: 2,
    path: "/",
    icon: <FaTelegram className="text-2xl" />,
  },
  {
    id: 3,
    path: "/",
    icon: <FaYoutube className="text-2xl" />,
  }
]

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
        <div className="container flex items-center justify-between">
            <aside className="grid-flow-col items-center">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <ul className="flex items-center gap-4">
                    {socialLinks.map((sl) => {
                      return (
                        <li key={sl.id}>
                          <Link to={sl.path}>{sl.icon}</Link>
                        </li>
                      )
                    })}
                </ul>
            </nav>
        </div>
     </footer>
  )
}

export default Footer