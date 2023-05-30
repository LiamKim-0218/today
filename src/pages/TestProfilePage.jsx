import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Google from 'C:/Users/namkyun/Desktop/workspace/today/src/components/Google.jsx';
import Facebook from 'C:/Users/namkyun/Desktop/workspace/today/src/components/Facebook.jsx';
import ProfileEdit from 'C:/Users/namkyun/Desktop/workspace/today/src/components/ProfileEdit.jsx';

const ProfilePage = () => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  return (
    <div>
      <h1>내 정보</h1>
      {/* 내 정보 표시 */}
      <div>
        <label>이름:</label>
        <span>John Doe</span>
      </div>
      <div>
        <label>이메일:</label>
        <span>johndoe@example.com</span>
      </div>
      <div>
        <label>생년월일:</label>
        <span>1996/02/18</span>
      </div>    
      <div>
        <label>나이:</label>
        <span>29</span>
      </div>
      <div>
        <label>성별:</label>
        <span>남자</span>
      </div>


      {/* 내 정보 수정 버튼 */}
      <button onClick={handleEditClick}>내 정보 수정</button>

      {/* 내 정보 수정 폼 */}
      {showEditForm && <ProfileEdit />}
    </div>
  );
};

export default ProfilePage;