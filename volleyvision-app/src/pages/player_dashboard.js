import React from 'react'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    left: 300px;
    top: 65px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const Dashboard = () => {
    return (
        <div>
            <SideBar/>
            <Container>
                Dashboard
            </Container>
            <SearchBar/>
    
        </div>
    )
}

export default Dashboard