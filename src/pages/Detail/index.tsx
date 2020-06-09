import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Feather as Icon, FontAwesome } from "@expo/vector-icons";

import {
  Address,
  AddressContent,
  AddressTitle,
  Button,
  ButtonText,
  Container,
  Footer,
  PointImage,
  PointItems,
  PointName,
  SafeArea
} from "./styles";

const Detail = () => {
  const navigation = useNavigation();

  const handleNavigateBack = () => {
    navigation.goBack();
  };
  return (
    <SafeArea>
      <Container>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>
        <PointImage
          source={{
            uri:
              "https://media-cdn.tripadvisor.com/media/photo-s/0f/0b/57/9a/fachada-do-estabelecimento.jpg"
          }}
        />
        <PointName>Mercado do mec</PointName>
        <PointItems>Lâmpadas, oleos de cozinha</PointItems>
        <Address>
          <AddressTitle>Endereço</AddressTitle>
          <AddressContent>Goias, Anapolis</AddressContent>
        </Address>
      </Container>
      <Footer>
        <Button onPress={() => {}}>
          <FontAwesome name="whatsapp" size={20} color="#FFF" />
          <ButtonText>Whatsapp</ButtonText>
        </Button>
        <Button onPress={() => {}}>
          <Icon name="mail" size={20} color="#FFF" />
          <ButtonText>E-Mail</ButtonText>
        </Button>
      </Footer>
    </SafeArea>
  );
};

export default Detail;
