import React from 'react'
//Outlet的用法类似vue中的router-veiw
import { NavLink,Outlet} from "react-router-dom"
export default function About() {
    return (
        <div>
            <h1>About</h1>
            <div style={{width:"50%",display:"flex",justifyContent:"space-around"}}>
                <NavLink to="news">新闻</NavLink>
                <NavLink to="message">消息</NavLink>
            </div>
            <div>
                {/* 用于指定路由组件呈现的位置 */}
                <Outlet/>
            </div>
        </div>
    )
}
