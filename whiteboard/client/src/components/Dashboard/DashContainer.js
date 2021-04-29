import React from 'react'
import MainNavBar from './MainNavBar/MainNavBar'
import MainTable from './MainTable/MainTable'

function DashContainer() {
    return (
        <div style={{position: 'relative', marginTop: "68px"}}>
            <MainNavBar />
            <MainTable />
        </div>
    )
}

export default DashContainer