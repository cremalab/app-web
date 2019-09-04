import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { BgCard } from "."
import catan from "../../assets/testImgs/catan.jpg"

const UrsBrdVar = [{ rating: 1, isborrowed: false, id: 1 }]
const catanBG = {
  UrsBrd: UrsBrdVar,
  brdGameId: 1,
  name: "Catan",
  minPlayers: "3",
  maxPlayers: "4",
  avgPlayTime: "120",
  description:
    "In Catan (formerly The Settlers of Catan), players try to be the dominant force on the island of Catan by building settlements, cities, and roads. ",
  category: "Negotiation",
  minAge: "10",
  img: catan,
  thumbnail: catan,
  bgGeekID: "13",
  createdAt: "2019-07-15T16:27:40.000Z",
  updatedAt: "2019-07-15T16:27:40.000Z",
}

storiesOf("BgCard", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <BgCard boardgames={catanBG} key={catanBG.brdGameId} />)
