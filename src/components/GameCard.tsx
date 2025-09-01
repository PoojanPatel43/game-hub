import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Grid, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface props {
  games: Game;
}

function GameCard({ games }: props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={games.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
        <PlatformIconList
          platforms={games.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
