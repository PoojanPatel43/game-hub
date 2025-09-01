import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Grid, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface props {
  games: Game;
}

function GameCard({ games }: props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(games.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={games.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={games.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
