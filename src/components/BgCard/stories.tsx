import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { BgCard } from "."

const catan = {
  brdGameId: 1,
  name: "Catan",

  minPlayers: "3",
  maxPlayers: "4",

  avgPlaytime: "120",

  description:
    "In Catan (formerly The Settlers of Catan), players try to be the dominant force on the island of Catan by building settlements, cities, and roads. ",

  category: "Strat",

  minAge: "10",

  img:
    "https://cf.geekdo-images.com/thumb/img/g8LvJsd2oLAub6AEKN_Xpdoi8Sw=/fit-in/200x150/pic2419375.jpg",
  thumbnail: "Klaus Teuber",

  createdAt: "Monday",

  updatedAt: "Moday",
}

storiesOf("BgCard", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <BgCard boardgames={catan} />)
