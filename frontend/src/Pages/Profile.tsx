import { useState } from 'react';
import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../Components/Common/Container';
import { Text } from '../Components/Common/Text';
import { useUserContext } from '../Contexts/UserContext';
import { firebaseAuth, SendVerifyEmail } from '../Services/FirebaseService';

export const Profile = (): JSX.Element => {
  const { user, setUser } = useUserContext();
  const [displayName, setDisplayName] = useState<string>('');
  const [emailSent, setEmailSent] = useState<boolean>(false);

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

  const handleVerify = async () => user && SendVerifyEmail(user).then(() => setEmailSent(true));

  return (
    <StyledProfilePage>
      {user && (
        <>
          <Text underlined={true} fontSize={'1.5rem'}>
            User Info
          </Text>
          <FlexColumn>
            {!user.emailVerified && (
              <FlexRow>
                <Text color={'tomato'} margin={'0 0.5rem'}>
                  ❗ Please verify your email address.
                </Text>
                {emailSent ? (
                  <Text color={'#00ff80'} margin={'0 0.5rem'}>
                    Email Sent!
                  </Text>
                ) : (
                  <Text margin={'0'} onClick={handleVerify}>
                    Re-Send Email
                  </Text>
                )}
              </FlexRow>
            )}
            <Text>Display Name: {user.displayName || `Please Set Below`}</Text>
            <Text>Email: {user?.email}</Text>
          </FlexColumn>
          <Text underlined={true} fontSize={'1.5rem'}>
            Update User
          </Text>
          <FlexRow align={'center'}>
            <Text>Display Name</Text>
            <input onChange={e => setDisplayName(e.target.value)} type="text" placeholder="Update Display Name" />
            <button type="button" onClick={handleUpdateUsername}>
              update!
            </button>
          </FlexRow>
        </>
      )}
    </StyledProfilePage>
  );
};

const StyledProfilePage = styled.div``;
