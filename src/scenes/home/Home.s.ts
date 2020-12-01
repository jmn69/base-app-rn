import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const CustomText = styled.Text`
  font-size: ${(props) => props.theme.font.sizes.medium};
  color: ${(props) => props.theme.colors.accent};
`;
