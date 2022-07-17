import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
export default function News() {
    let id="001";
    let content="you are niuma"
    return (
        <div>
            <ol>
                <li><NavLink to={`news1/${id}/${content}`}>点我去三级路由并携带参数</NavLink></li>
            </ol>
            <Outlet/>
        </div>
    )
}
