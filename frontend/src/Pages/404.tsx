import styled from 'styled-components';
import { FlexColumn } from '../Components/Common/Container';
import { SvgIcon } from '../Components/Common/SvgIcon';
import { Text } from '../Components/Common/Text';

export const NotFound = () => (
  <PageWrapper>
    <FlexColumn align={'center'} justify={'center'}>
      <Text animation={'spin 5s linear infinite'} weight={'bolder'} fontSize="8rem">
        😱
      </Text>
      <Text weight={'bolder'} fontSize="10rem">
        404
      </Text>
      <Text fontSize="2rem">We're Sorry, But The Page Was Not Found!</Text>
      <SvgIcon height={'4rem'} width={'4rem'} type={'House'} to={'/'} />
    </FlexColumn>
  </PageWrapper>
);

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
