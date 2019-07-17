import { BgCard } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

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
const brdGameA = {
  brdGameId: 3,
  name: "Catan",

  minPlayers: "3",
  maxPlayers: "4",

  avgPlaytime: "120",

  description:
    "In Catan (formerly The Settlers of Catan), players try to be the dominant force on the island of Catan by building settlements, cities, and roads. ",

  category: "Strat",

  minAge: "10",

  img: "",
  thumbnail: "Klaus Teuber",

  createdAt: "Monday",

  updatedAt: "Moday",
}

describe("BgCard", () => {
  it("If the object has all unformation the game should render just fine", () => {
    // Arrange
    const brdGame = catan
    // Act
    const received = shallowRender(<BgCard boardgames={brdGame} />)

    // Assert
    expect(received).toMatchSnapshot()
  })

  it('If the board game dose not have an image it should return "NO Image" ', () => {
    // Arrange
    const brdGame = brdGameA
    // Act
    const received = shallowRender(<BgCard boardgames={brdGame} />)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
