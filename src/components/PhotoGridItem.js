import React from 'react';
import styled from 'styled-components';

import photo from '../assets/photo.jpg';
import {
  ActivityIcon as HeartIcon,
  MessageIcon as CommentIcon,
} from '../components/Icons';

const PhotoGridItemWrapper = styled.figure`
  width: 300px;
  height: 300px;
  background-color: white;
  border: 0.5px solid darkgrey;

  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .img-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    opacity: 0;
    color: white;
    fill: white;
  }

  .img-overlay:hover {
    opacity: 1;
  }
  .img-overlay-content {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    transform: translate(-50%, -50%);
  }

  .img-overlay-content > :first-child {
    margin-right: 20px;
  }

  .img-overlay-content div {
    color: white;
    display: flex;
    align-items: center;
    font-weight: bold;
  }
`;

const PhotoGridItem = () => {
  return (
    <PhotoGridItemWrapper>
      <img src={photo} alt='grid item' />
      <div className='img-overlay'>
        <span className='img-overlay-content'>
          <div>
            <div>
              <HeartIcon light size={40} />
            </div>
            <h3> 5</h3>
          </div>
          <div>
            <div>
              <CommentIcon light size={40} />
            </div>
            <h3> 5</h3>
          </div>
        </span>
      </div>
    </PhotoGridItemWrapper>
  );
};

export default PhotoGridItem;
