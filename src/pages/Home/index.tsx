import React from "react";
import { Image, Text } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import {
  Button,
  ButtonIcon,
  ButtonText,
  Container,
  Description,
  Footer,
  Main,
  Title
} from "./styles";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const handleNavigationToPoints = () => {
    navigation.navigate("Points");
  };

  return (
    <Container
      source={require("../../assets/home-background.png")}
      imageStyle={{ width: 274, height: 368 }}
    >
      <Main>
        <Image source={require("../../assets/logo.png")} />
        <Title>Seu marketplace de coleta de resíduos</Title>
        <Description>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </Description>
      </Main>
      <Footer>
        <Button onPress={handleNavigationToPoints}>
          <ButtonIcon>
            <Text>
              <Icon name="arrow-right" color="#FFF" size={24} />
            </Text>
          </ButtonIcon>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
};

export default Home;
