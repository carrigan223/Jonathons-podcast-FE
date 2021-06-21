import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledImage = styled.img`
  width: 220px;
  height: 220px;
  border: 1px solid white;
`;
const PodcastRow = styled.div`
  display: flex;
  overflow: auto;
  margin-left: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const PodcastContainer = styled(Link)`
  border: 1px solid white;
  background-color: #181818;
  box-shadow: 0px 0px 15px grey;
  border-radius: 13px;
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
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-bottom: 25px;
  color: white;
`;

const CategoryTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  text-shadow: 2px 2px 20px white;
`;
const ImageContainer = styled.div``;
const Home = () => {
  const [Featured, setFeatured] = useState([]);

  const getFeaturedLists = () => {
    axios
      .get(`https://listen-api-test.listennotes.com/api/v2/curated_podcasts`)
      .then((response) => {
        const featuredRes = response.data.curated_lists;
        console.log(featuredRes);
        setFeatured(featuredRes);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getFeaturedLists();
  }, []);

  return (
    <ViewContainer>
      <div>
        {Featured.map((category, index) => (
          <div>
            <CategoryTitle>{category.title}</CategoryTitle>
            <PodcastRow key={index}>
              {category.podcasts.map((podcast, index) => (
                <PodcastContainer
                  key={index}
                  id={podcast.id}
                  to="/ListEpisodes"
                >
                  <TitleContainer>
                    <h3 style={{ textAlign: "center" }}>{podcast.title}</h3>
                  </TitleContainer>

                  <ImageContainer>
                    <StyledImage alt="podcast image" src={podcast.image} />
                  </ImageContainer>
                </PodcastContainer>
              ))}
            </PodcastRow>
          </div>
        ))}
      </div>
    </ViewContainer>
  );
};

export default Home;
