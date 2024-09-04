import {useState} from "react";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="flex justify-between items-center px-6 py-2 bg-amber-100 mb-5">
            <div className="text-2xl">Logo</div>
            <div className="relative">
                <button onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
                {menuOpen && (
                    <div role="menu" className="flex flex-col gap-2 absolute right-0 bg-amber-200 p-5">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Nav