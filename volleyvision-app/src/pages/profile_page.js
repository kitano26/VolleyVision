import React from 'react'
import SearchBar from '../components/Topbar/Searchbar'
import SideBar from '../components/Sidebar/Sidebar'
import styled from 'styled-components'
import { ListItemText } from '@material-ui/core'
import ReactRoundedImage from "react-rounded-image"
import photo from './volleyball.jpeg'

console.log(photo)

const Container = styled.div`
    position: absolute;
    left: 300px;
    top: 65px;
    font: Times New Roman;
    font-size: 30px;
    width: 200px;
    height: 150px;
`

const NameContainer = styled.div`
    position: absolute;
    left: 700px;
    top: 440px;
    font: Times New Roman;
    width: 200px;
    height: 150px;
`

const ProfileContainer1 = styled.div`
    position: absolute;
    left: 400px;
    top: 525px;
    font: Times New Roman;
    font-size: 30px;
    width: 300px;
    height: 150px;
`

const ProfileContainer2 = styled.div`
    position: absolute;
    left: 750px;
    top: 525px;
    font: Times New Roman;
    font-size: 30px;
    width: 300px;
    height: 150px;
    font-weight: bold;
`

const ProfileContainer3 = styled.div`
    position: absolute;
    left: 1000px;
    top: 525px;
    font: Times New Roman;
    font-size: 30px;
    width: 300px;
    height: 150px;
`

const EditContainer = styled.div`
    position: absolute;
    left: 740px;
    top: 600px;
    font: Times New Roman;
    font-size: 30px;
    width: 300px;
    height: 150px;
`

const ImageContainer = styled.div`
    position: absolute;
    left: 650px;
    top: 150px;
    width: 400px;
    height: 150px;
`

const Profile = () => {
    return (
        <div>
            <SideBar/>
            <ImageContainer>
                <ReactRoundedImage
                image={photo}
                roundedColor="#321124"
                imageWidth="275"
                imageHeight="275"
                roundedSize="15"
                />
            </ImageContainer>
            <Container>
                Profile
            </Container>

            <NameContainer>
                <h1>Katelyn Itano</h1>
            </NameContainer>

            <ProfileContainer1>
                <ListItemText>Team: RPM Sand </ListItemText>
                <ListItemText>School: Chapparal High School</ListItemText>
                
            </ProfileContainer1>
            
            <ProfileContainer2>
                <ListItemText>Age: 17</ListItemText>
                <ListItemText>GPA: 4.0</ListItemText>
            </ProfileContainer2>
            
            <ProfileContainer3>
                <ListItemText>Year: Junior </ListItemText>
                <ListItemText>Jersey Number: 13 </ListItemText>
            </ProfileContainer3>

            <EditContainer>
                <ListItemText>Edit Profile</ListItemText>
            </EditContainer>
            <SearchBar/>
    
        </div>

        
    )
}

export default Profile