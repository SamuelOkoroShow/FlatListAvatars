import { View, Text, Dimensions } from "react-native";
import React from "react";

// Custom Imports for this Component
import styled from "styled-components/native";
import { ContactDataType } from "../../shared/types";
import { AVATAR_IMAGE_SIZE } from "./AvataImage";

const height = Dimensions.get("window").height;
type PropTypes = Omit<ContactDataType, "image">;

// constants are declared in Snake_Case
const TEXT_ALT_COLOR = "#667";

export const CONTACT_DETAIL_HEIGHT = height - AVATAR_IMAGE_SIZE;

// Using Styled-Components for more component accessibility.
const Container = styled.View`
  height: ${CONTACT_DETAIL_HEIGHT}px;
`;

const NameTitleContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const NameText = styled.Text`
  font-size: 25px;
  text-align: center;
`;
const FirstNameText = styled.Text`
  font-weight: bold;
`;
const JobText = styled.Text`
  font-size: 18px;
  color: ${TEXT_ALT_COLOR};
`;

const AboutMeContainer = styled.View`
  flex: 8;
  padding: 15px;
  padding-top: 5px;
`;
const AboutMeTitle = styled.Text`
  font-weight: bold;
`;
const AboutMeText = styled.Text`
  color: ${TEXT_ALT_COLOR};
`;

// End of styled components.

const ContactDetails = (props: PropTypes) => {
  return (
    <Container testID={"Detail" + props.id}>
      <NameTitleContainer>
        <NameText>
          <FirstNameText>{props.first_name}</FirstNameText> {props.last_name}
        </NameText>
        <JobText>{props.job}</JobText>
      </NameTitleContainer>
      <AboutMeContainer>
        <AboutMeTitle>About me</AboutMeTitle>
        <AboutMeText>
          {props.description}
          {props.description}
          {props.description}
        </AboutMeText>
      </AboutMeContainer>
    </Container>
  );
};

export default ContactDetails;
