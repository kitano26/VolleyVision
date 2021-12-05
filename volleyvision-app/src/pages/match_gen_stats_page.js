import React from "react";
import SearchBar from "../components/Topbar/Searchbar";
import SideBar from "../components/Sidebar/Sidebar";
import styled from "styled-components";
import { GenStatsForm } from "../components/Statistics/GenStatsForm";
import ReactPlayer from "react-player";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Title_Container = styled.div`
  position: absolute;
  left: 100px;
  top: 115px;
  font: Times New Roman;
  font-size: 30px;
  width: 300px;
  height: 150px;
`;

const List_Container1 = styled.div`
  position: absolute;
  left: 100px;
  top: 190px;
  font: Times New Roman;
  background-color: #dbebfb;
  font-size: 18px;
  width: 100%;
`;

const VidContainer = styled.div`
  position: absolute;
  left: 100px;
  top: 120px;
  font: Times New Roman;
  font-size: 30px;
  width: 100%;
  height: 150px;
  @media screen and (min-width: 100px) and (max-width: 1100px) {
    float: bottom;
    max-width: 20vw;
  }
`;

const match_gen_stats_page = () => {
  return (
    <div>
      <SideBar />
      <VidContainer>
        <ImageList
          sx={{
            position: "absolute",
            top: 150,
            left: 100,
            width: 2000,
            height: 1100,
            bgcolor: "#DBEBFB",
          }}
          cols={3}
        >
          {itemData.map((item) => (
            <ImageListItem sx={{ pb: 1 }} key={item.urlLink}>
              <ReactPlayer url={item.urlLink} width="1050px" height="440px" />
              <ImageListItemBar
                sx={{ pb: 2 }}
                position="below"
                title={item.name}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </VidContainer>

      <Title_Container>Generate Statistics</Title_Container>
      <List_Container1>
        <GenStatsForm />
      </List_Container1>
      <SearchBar />
    </div>
  );
};

const itemData = [
  {
    urlLink: "https://www.youtube.com/watch?v=459Oda8XPy0&t=3s",
    name: "USA vs. Australia - Tokyo 2021",
  },
];

export default match_gen_stats_page;
