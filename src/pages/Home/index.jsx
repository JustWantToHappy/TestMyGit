import React from 'react'
import { Navigate } from 'react-router-dom';
export default function Home() {
    const [sum, setSum] = React.useState(0);
    return (
        <div>
            <h1>Home</h1>
            {/* Navigate一旦渲染就会引起视图的切换 */}
            {/* Navigate组件有一个属性replace，如果设置为true,则跳转模式相当于this.props.history.replace
            如果设置为false,则相当于this.props.history.push()，默认值是false */}
            {sum === 1 ? <Navigate to="/about" replace={true}/> : <span>{sum}</span>}
            <button onClick={() => { setSum(1) }}>点我</button>
        </div>

    )
}
