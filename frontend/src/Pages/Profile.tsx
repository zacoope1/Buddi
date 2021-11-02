import { useState } from 'react';
import styled from 'styled-components';
import { useUserContext } from '../Contexts/UserContext';
import { firebaseAuth } from '../Services/FirebaseService';

export const Profile = (): JSX.Element => {
  const { user, setUser } = useUserContext();
  const [displayName, setDisplayName] = useState<string>('');

  const handleUpdateUsername = async () => {
    if (user) {
      if (displayName.length >= 1) {
        await firebaseAuth
          .updateProfile(user, { displayName })
          .then(() => setUser({ ...user, displayName }))
          .catch(error => {
            console.log(error);
            alert('Failed to update user. Please try again!');
          });
      } else {
        alert('Display Name field is empty!');
      }
    }
  };

  return (
    <StyledProfilePage>
      {user && (
        <>
          <h2>User Info</h2>
          {!user.emailVerified && <p>Please verify your email account.</p>}
          <p>Display Name: {user.displayName || `Please Set Below`}</p>
          <p>Email: {user?.email}</p>
          <h2>Update User</h2>
          <form>
            <label>Display Name</label>
            <input onChange={e => setDisplayName(e.target.value)} type="text" placeholder="Update Display Name" />
            <button type="button" onClick={handleUpdateUsername}>
              update!
            </button>
          </form>
        </>
      )}
    </StyledProfilePage>
  );
};

const StyledProfilePage = styled.div``;
