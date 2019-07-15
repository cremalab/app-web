import { BgCard } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

export const catan = {
  name: "Catan",

  numOfPlayers: "3-4",

  playTime: 120,

  complexity: 4,

  description:
    "In Catan (formerly The Settlers of Catan), players try to be the dominant force on the island of Catan by building settlements, cities, and roads. ",

  category: "Strat",

  artist: "Volkan Baga",

  designer: "Klaus Teuber",

  img:
    "https://cf.geekdo-images.com/thumb/img/g8LvJsd2oLAub6AEKN_Xpdoi8Sw=/fit-in/200x150/pic2419375.jpg",

  createdAt: "Monday",

  updatedAt: "Moday",
}

describe("BgCard", () => {
  it("renders", () => {
    // Act
    const received = shallowRender(<BgCard boardgames={catan} />)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
