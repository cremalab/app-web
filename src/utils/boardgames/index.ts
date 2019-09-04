import basari from "../../assets/testImgs/basari.jpg"
import catan from "../../assets/testImgs/catan.jpg"
import bohnanza from "../../assets/testImgs/bohnanza.jpg"
import twilight from "../../assets/testImgs/twilight.jpg"

const UrsBrdVar = [{ rating: 1, isborrowed: false, id: 1 }]

export const boardgames = [
  {
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
  },
  {
    UrsBrd: UrsBrdVar,
    brdGameId: 2,
    name: "Basari",
    minPlayers: "3",
    maxPlayers: "4",
    avgPlayTime: "25",
    description:
      "Basari is a game of gem merchants competing in a marketplace&quot;: racing, collecting, trading, and predicting what the other merchants will do.",
    category: "Negotiation",
    minAge: "10",
    img: basari,
    thumbnail: basari,
    bgGeekID: "14",
    createdAt: "2019-07-15T16:27:40.000Z",
    updatedAt: "2019-07-15T16:27:40.000Z",
  },
  {
    UrsBrd: UrsBrdVar,
    brdGameId: 3,
    name: "Bohnanza",
    minPlayers: "2",
    maxPlayers: "7",
    avgPlayTime: "45",
    description:
      "Bohnanza is the first in the Bohnanza family of games and has been published in several different editions.&#10;&#10;The cards are colorful depictions of beans in various descriptive poses, and the object is to make coins by planting fields (sets) of these beans and then harvesting them.  To help players match their cards up, the game features extensive trading and deal making.  One of the most unique features of the game is that you cannot rearrange your hand, as you need to play the cards in the order that you draw them.&#10;&#10;The original German edition supports 3-5 players.&#10;&#10;The English version from Rio Grande Games comes with the first edition of the first German expansion included in a slightly oversized box.  One difference in the contents, however, is that bean #22's Weinbrandbohne (Brandy Bean) was replaced by the Wachsbohne, or Wax Bean.  This edition includes rules for up to seven players, like the Erweiterungs-Set, but also adapts the two-player rules of Al Cabohne in order to allow two people to play Bohnanza.&#10;&#10;",
    category: "Card Game",
    minAge: "13",
    img: bohnanza,
    thumbnail: bohnanza,
    bgGeekID: "11",
    createdAt: "2019-07-15T20:32:39.000Z",
    updatedAt: "2019-07-15T21:38:46.550Z",
  },
  {
    UrsBrd: UrsBrdVar,
    brdGameId: 4,
    name: "Twilight Imperium",
    minPlayers: "2",
    maxPlayers: "6",
    avgPlayTime: "240",
    description:
      "Sprawling game of space faring races out to dominate known space.  This game combines a number of elements from other game systems into a unique package.  Hex tiles create the game board and each player begins with a race with unique powers.  The game focuses heavily on a political voting phase and a web of trade agreements between players.&#10;&#10;Part of the Twilight Imperium Series / Family.&#10;&#10;Expanded with:&#10;&#10;    Twilight Imperium: Borderlands&#10;    Twilight Imperium: Distant Suns&#10;    Twilight Imperium: Twilight Armada&#10;    Twilight Imperium: The Outer Rim&#10;&#10;&#10;&#10;&#10;Re-implemented in:&#10;&#10;    Twilight Imperium (Second Edition)&#10;    Twilight Imperium (Third Edition)&#10;    Twilight Imperium (Fourth Edition)&#10;&#10;&#10;&#10;&#10;",
    category: "Civilization",
    minAge: "12",
    img: twilight,
    thumbnail: twilight,
    bgGeekID: "24",
    createdAt: "2019-07-15T20:32:39.000Z",
    updatedAt: "2019-07-15T21:39:18.073Z",
  },
]
