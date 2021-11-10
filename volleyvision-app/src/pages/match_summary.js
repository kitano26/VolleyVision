import React from 'react'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import SetTable from '../components/Statistics/SetTable'
import StatisticsTable from '../components/Statistics/StatisticsTable'

const Dash_Container = styled.div`
    position: absolute;
    left: 300px;
    top: 65px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const List_Container1 = styled.div`
    position: absolute;
    left: 300px;
    top: 200px;
    font: Times New Roman;
    background-color: white;
    font-size: 20px;
    width: 70%;
`

const List_Container2 = styled.div`
    position: absolute;
    left: 300px;
    top: 400px;
    font: Times New Roman;
    background-color: white;
    font-size: 20px;
    width: 70%;
`

const Match_Summary = () => {
    return (
        <div>
            <SideBar/>
            <Dash_Container>
                Match Statistics
            </Dash_Container>

            <List_Container1>
                <SetTable/>
            </List_Container1>

            <List_Container2>
                <StatisticsTable/>
            </List_Container2>
            
            
            <SearchBar/>
        
        </div>

        
    )
}

export default Match_Summary