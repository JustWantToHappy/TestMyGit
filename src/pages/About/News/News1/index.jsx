import React from 'react'
import { useParams } from "react-router-dom"
export default function News1() {
    const { id, content } = useParams();
    return (
        <div>
            <hr />
            <h4>我是三级路由组件News1</h4>
            <p>id是：{id}</p>
            <p>内容是：{content}</p>
        </div>
    )
}
