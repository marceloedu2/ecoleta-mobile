import React, { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";
import { Feather as Icon } from "@expo/vector-icons";
import {
  Container,
  Description,
  Item,
  ItemsContainer,
  Map,
  MapContainer,
  MapMarker,
  MapMarkerContainer,
  MapMarkerImage,
  MapMarkerTitle,
  MapTriangle,
  SafeArea,
  Title
} from "./styles";

import api from "../../services/api";

const Points = () => {
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  const handleNavigateToDetail = () => {
    navigation.navigate("Detail");
  };
  return (
    <SafeArea>
      <Container>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>
        <Title>Bem vindo.</Title>
        <Description>Encontre no mapa um ponto de coleta.</Description>
        <MapContainer>
          <Map
            initialRegion={{
              latitude: -16.3581401,
              longitude: -48.930359,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014
            }}
          >
            <MapMarker
              coordinate={{
                latitude: -16.3581401,
                longitude: -48.930359
              }}
              onPress={handleNavigateToDetail}
            >
              <MapMarkerContainer>
                <MapMarkerImage
                  source={{
                    uri:
                      "https://media-cdn.tripadvisor.com/media/photo-s/0f/0b/57/9a/fachada-do-estabelecimento.jpg"
                  }}
                />
                <MapMarkerTitle>mercadinho</MapMarkerTitle>
              </MapMarkerContainer>
            </MapMarker>
            <MapTriangle />
          </Map>
        </MapContainer>
      </Container>
      <ItemsContainer>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20
          }}
        >
          <Item onPress={() => {}}>
            <SvgUri
              uri="http://192.168.0.106:3333/uploads/oleo.svg"
              width={42}
              height={42}
            />
            <Text>Lâmpadas</Text>
          </Item>
          <Item onPress={() => {}}>
            <SvgUri
              uri="http://192.168.0.106:3333/uploads/oleo.svg"
              width={42}
              height={42}
            />
            <Text>Lâmpadas</Text>
          </Item>
          <Item onPress={() => {}}>
            <SvgUri
              uri="http://192.168.0.106:3333/uploads/oleo.svg"
              width={42}
              height={42}
            />
            <Text>Lâmpadas</Text>
          </Item>
          <Item onPress={() => {}}>
            <SvgUri
              uri="http://192.168.0.106:3333/uploads/oleo.svg"
              width={42}
              height={42}
            />
            <Text>Lâmpadas</Text>
          </Item>
          <Item onPress={() => {}}>
            <SvgUri
              uri="http://192.168.0.106:3333/uploads/oleo.svg"
              width={42}
              height={42}
            />
            <Text>Lâmpadas</Text>
          </Item>
          <Item onPress={() => {}}>
            <SvgUri
              uri="http://192.168.0.106:3333/uploads/oleo.svg"
              width={42}
              height={42}
            />
            <Text>Lâmpadas</Text>
          </Item>
          <Item onPress={() => {}}>
            <SvgUri
              uri="http://192.168.0.106:3333/uploads/oleo.svg"
              width={42}
              height={42}
            />
            <Text>Lâmpadas</Text>
          </Item>
          <Item onPress={() => {}}>
            <SvgUri
              uri="http://192.168.0.106:3333/uploads/oleo.svg"
              width={42}
              height={42}
            />
            <Text>Lâmpadas</Text>
          </Item>
          <Item onPress={() => {}}>
            <SvgUri
              uri="http://192.168.0.106:3333/uploads/oleo.svg"
              width={42}
              height={42}
            />
            <Text>Lâmpadas</Text>
          </Item>
        </ScrollView>
      </ItemsContainer>
    </SafeArea>
  );
};

export default Points;
