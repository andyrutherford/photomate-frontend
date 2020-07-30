import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { changePassword } from '../../utils/password';

import Button from '../../styles/Button';

const ChangePasswordWrapper = styled.div`
  .settings-form-header {
    width: 333px;
    margin-left: 30px;
  }

  .avatar {
    margin: auto 0 auto auto;
  }

  .settings-form-header > div {
    margin-left: 30px;
  }

  input[id='change-avatar'],
  input[id='change-avatar-link'] {
    display: none;
  }

  span#change-avatar-click {
    cursor: pointer;
    color: #0095f6;
    font-weight: bold;
  }

  .form-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .form-label {
    margin-left: auto;
  }

  .form-group button {
    margin-left: auto;
  }
`;

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.oldPassword === '' ||
      formData.newPassword === '' ||
      formData.confirmNewPassword === ''
    ) {
      return toast.error('All password fields are required.');
    }
    if (formData.newPassword !== formData.confirmNewPassword) {
      return toast.error('The new passwords do not match.');
    }
    setLoading(true);

    try {
      const user = await changePassword(
        formData.oldPassword,
        formData.newPassword
      );
      toast.success('Your password has been successfully changed.');
      history.push(`/${user}`);
    } catch (error) {
      setLoading(false);
      if (error.response.status === 400)
        toast.error(error.response.data.message);
      else {
        toast.error('A problem occurred.  Please try again in a few minutes.');
      }
    }
  };

  return (
    <ChangePasswordWrapper>
      <div className='form-group'>
        <label className='form-label'>Old Password</label>
        <input
          type='text'
          placeholder=''
          name='oldPassword'
          onChange={onChange}
        />
      </div>
      <div className='form-group'>
        <label className='form-label'>New Password</label>
        <input
          type='text'
          placeholder=''
          name='newPassword'
          onChange={onChange}
        />
      </div>
      <div className='form-group'>
        <label className='form-label'>Confirm New Password</label>
        <input
          type='text'
          placeholder=''
          name='confirmNewPassword'
          onChange={onChange}
        />
      </div>{' '}
      <div className='form-group'>
        <Button
          type='submit'
          value='Submit'
          onClick={onSubmit}
          disabled={false}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </ChangePasswordWrapper>
  );
};

export default ChangePassword;
