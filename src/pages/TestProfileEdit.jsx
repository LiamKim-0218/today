import React, { useState } from 'react';
import Sidebar from 'C:/Users/namkyun/Desktop/workspace/today/src/components/Sidebar.jsx';

const ProfileEdit = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 수정된 정보를 서버로 전송하는 로직을 추가할 수 있습니다.
    console.log('수정된 사용자 정보:', { username, email });
  };

  return (
    <div>
      {/* <Sidebar /> */}
      <h1>내 정보 수정</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>이메일:</label>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default ProfileEdit;