import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 220px;
  height: 220px;
  border: 1px solid white;
`;
const PodcastRow = styled.div`
  display: flex;
  overflow: auto;
  margin-left: 10px;
`;

const PodcastContainer = styled.div`
  border: 1px solid white;
  background-color: #181818;
  box-shadow: 2px 2px 20px grey;
  border-radius: 33px;
  margin: 20px 20px;
  width: 300px;
  height: 300px;
  align-items: center;
  padding: 25px;
`;

const ViewContainer = styled.div`
  overflow: auto;
  height: 82vh;
  width: 83vw;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-bottom: 25px;
`;

const CategoryTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  text-shadow: 2px 2px 20px white;
`;
const ImageContainer = styled.div``;
const EpisodeList = ({ id }) => {
  const [Episodes, setEpisodes] = useState([]);
  console.log(id);

  //   const getFeaturedLists = () => {
  //     axios
  //       .get(`https://listen-api-test.listennotes.com/api/v2/curated_podcasts`)
  //       .then((response) => {
  //         const featuredRes = response.data.curated_lists;
  //         console.log(featuredRes);
  //         setFeatured(featuredRes);
  //       })
  //       .catch((error) => console.error(`Error: ${error}`));
  //   };

  //   useEffect(() => {
  //     getFeaturedLists();
  //   }, []);

  return (
    <ViewContainer>
      <div>Hello World</div>
    </ViewContainer>
  );
};

export default EpisodeList;
