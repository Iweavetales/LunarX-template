import React from "react"
import { Outlet } from "react-router"
import { Link } from "lunarx/router"

export default function AboutPage() {
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <div>About LunarX</div>
                <div>
                    <Link href={"/"}>To Index</Link>s
                </div>
                <Outlet />
            </div>
        </div>
    )
}
