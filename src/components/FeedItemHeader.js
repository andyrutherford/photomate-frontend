import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { deletePost } from '../actions/post-actions';

import Modal from './modal/Modal';
import Avatar from '../styles/Avatar';
import { ThreeDotsIcon } from '../components/Icons';

const FeedItemHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  border-bottom: 0.5px solid lightgrey;
  padding: 8px 12px;

  * {
    margin: auto 0;
  }

  div {
    margin: inherit;
    display: flex;
  }

  a {
    display: block;
    margin-left: 10px;
    font-weight: bold;
    color: black;
  }
`;

const FeedItemHeader = ({
  username,
  avatar,
  postOwner,
  deletePost,
  postId,
}) => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const deletePostHandler = () => {
    deletePost(postId);
    setShowModal(false);
  };

  return (
    <FeedItemHeaderWrapper>
      <div>
        <Avatar md className='avatar' src={avatar} alt={avatar} />
        <Link to={`/${username}`}>{username}</Link>
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
                onClick={() => history.push(`/p/${postId}`)}
              >
                View Post
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
    </FeedItemHeaderWrapper>
  );
};

export default connect(null, { deletePost })(FeedItemHeader);
