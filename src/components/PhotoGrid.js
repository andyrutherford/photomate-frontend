import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { GridIcon, BookmarkIcon } from './Icons';

import PhotoGridItem from './PhotoGridItem';

const PhotoGridWrapper = styled.div`
  hr {
    border: 0.5px solid lightgrey;
    margin-top: 10px;
  }

  a {
    color: black;
  }

  .profile-tabs {
    display: flex;
    justify-content: center;
  }

  .profile-tab {
    padding: 20px;
    margin: 0 10px;
  }
  .profile-tab * {
    vertical-align: middle;
    font-weight: bold;
  }
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    justify-items: center;
  }
`;

const PhotoGrid = () => {
  return (
    <PhotoGridWrapper>
      <hr />
      <div className='profile-tabs'>
        <div className='profile-tab'>
          <Link to='#!'>
            <GridIcon size={16} />
            <span className='tab-label'> POSTS</span>
          </Link>
        </div>
        <div className='profile-tab'>
          <Link to='#!'>
            <BookmarkIcon size={16} />
            <span className='tab-label'>SAVED</span>
          </Link>
        </div>
      </div>
      <div className='photo-grid'>
        <PhotoGridItem />
        <PhotoGridItem />
        <PhotoGridItem />
        <PhotoGridItem />
        <PhotoGridItem />
        <PhotoGridItem />
        <PhotoGridItem />
        <PhotoGridItem />
        <PhotoGridItem />
        <PhotoGridItem />
        <PhotoGridItem />
        <PhotoGridItem />
      </div>
    </PhotoGridWrapper>
  );
};

export default PhotoGrid;
