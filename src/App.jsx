import React from 'react'
//Routes相当于router5中的Switch组件
// import {Route, Routes} from "react-router-dom"
import { NavLink, useRoutes } from "react-router-dom"
import "./App.css"
import routes from "./routes"
export default function App() {
    // 注册路由表
    const element = useRoutes(routes);
    return (
        <div className="div1">
            <div className="div2">
                {/* 路由链接 */}
                {/*如果想让NavLink标签高亮，必须给它的className属性设置一个高亮样式
                该className属性接收一个函数，函数必须有返回值，返回类选择器(可以是多个类选择器),
                同时该函数可以接收到一个参数，该参数是个对象，且该对象中含有一个属性isActive,
                如果当前链接对应的路由
                在页面中展示时或者点击了该路由链接，isActive的值会变成true,如果点击了
                其他路由链接或者展示的是其他路由组件，isActive的值为false
                */}
                <NavLink to="/about" className={({ isActive }) => { return isActive ? "is-active" : "" }}>about</NavLink>
                {/* className的类型必须是个字符串 */}
                <NavLink to="/home">home</NavLink>
            </div>
            {/* 注册路由组件,router5中使用component，写成组件名称形式,router6中使用
        element,同时还要写成标签形式 */}
            {/* Route6中使用Navigate代替Redirect */}
            {/*  <Routes>
                <Route path="/about" element={<About />} />
                <Route path="home" element={<Home />} />
                <Route path="/" element={<Navigate to="/about" />} />
            </Routes> */}
            {element}
            {/* 使用element路由表代替以上注册路由部分 */}
        </div>
    )
}
