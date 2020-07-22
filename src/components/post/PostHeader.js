import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import Modal from '../modal/Modal';
import Avatar from '../../styles/Avatar';
import { ThreeDotsIcon } from '../../components/Icons';

const PostHeaderWrapper = styled.header`
  border-bottom: 0.5px solid lightgrey;
  display: flex;
  justify-content: space-between;
  height: 72px;
  padding: 16px;

  .post-header__left {
    display: flex;
    margin: auto 0;
  }

  svg {
    margin: auto 0;
  }

  .modal-button {
    width: 100%;
  }
`;

const PostHeader = ({ username, avatar, deletePost, postId, postOwner }) => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const deletePostHandler = () => {
    deletePost(postId);
    setShowModal(false);
    return history.push('/');
  };

  return (
    <PostHeaderWrapper>
      <div className='post-header__left'>
        <Avatar src={avatar} alt='avatar' />
        <span className='bold'>{username}</span>
      </div>
      {postOwner && <ThreeDotsIcon onClick={() => setShowModal(true)} />}
      {showModal && (
        <Modal
          noHeader
          noFooter
          show={true}
          className='modal-mini'
          style={{ borderRadius: '12px' }}
          onCancel={() => setShowModal(false)}
        >
          <ul>
            <li>
              <button
                style={{
                  width: '100%',
                  border: 'none',
                  backgroundColor: 'transparent',
                  minHeight: '48px',
                  fontSize: '14px',
                  color: 'red',
                }}
                onClick={() => deletePostHandler()}
              >
                Delete Post
              </button>
            </li>
            <li>
              <button
                style={{
                  width: '100%',
                  border: 'none',
                  borderTop: '1px solid lightgrey',
                  backgroundColor: 'transparent',
                  minHeight: '48px',
                  fontSize: '14px',
                }}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </li>
          </ul>
        </Modal>
      )}
    </PostHeaderWrapper>
  );
};

export default PostHeader;
