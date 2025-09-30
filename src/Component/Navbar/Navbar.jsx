import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const pages = [
        { id: "1", title: "Home", path: "/" },
        { id: "2", title: "Add Product", path: "/addproduct" },
    ]

    return (
        <div>
            {pages.map((el,index) => (
                <NavLink
                    key={index}
                    to={el.path}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    style={{ marginRight: '10px' }}
                >
                    {el.title}
                </NavLink>
            ))}
        </div>
    )
}
