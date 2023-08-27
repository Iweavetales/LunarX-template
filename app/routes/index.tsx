import React from "react"
//
import { Outlet } from "react-router"
import { Link } from "lunarx/router"
import {Column} from "../src/styles/test.css";
import {useServerFetches} from "lunarx/ssfetch";


export default function IndexPage() {
    const serverFetches = useServerFetches();
    console.log(serverFetches)

    return (
        <div>
            <div className={Column} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: 30 }}>
                        <img width={200} src={"/static/svg/emblem_symbol_only.svg"}   />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <img src={"/static/svg/emblem_text_only.svg"} width={200} />
                            <img
                                src={"/static/svg/emblem_text_only.svg"}
                                width={200}
                                style={{ transform: "scaleY(-1)", opacity: 0.3 }}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: 30 }}>
                    <Link href={"/about"}>To Abouts</Link>s
                </div>
                <Outlet />
            </div>
        </div>
    )
}
