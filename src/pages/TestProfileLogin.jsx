import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = () => {
    // API 호출 등의 로직을 통해 사용자 정보를 가져오는 함수
    // 예시로 임의의 데이터를 설정하였습니다.
    const userData = {
      username: 'John Doe',
      email: 'johndoe@example.com',
    };

    setUsername(userData.username);
    setEmail(userData.email);
  };

  return (
    <div>
      <h1>내 정보</h1>
      <div>
        <label>이름:</label>
        <span>{username}</span>
      </div>
      <div>
        <label>이메일:</label>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default ProfilePage;