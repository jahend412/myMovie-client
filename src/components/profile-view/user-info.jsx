import React from 'react';

export function UserInfo({ name, password, birthday, email }) {
  return (
    <>
      <p>Username: {name}</p>
      <p>Password: {password}</p>
      <p>Email: {email}</p>
      <p>Birthday: {birthday}</p>
    </>
  )
}