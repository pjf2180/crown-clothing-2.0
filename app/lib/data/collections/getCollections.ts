import { CollectionMap } from "../../models/collection.models";

export async function getCollections(): Promise<CollectionMap> {
  const collections: CollectionMap = {
    sneakers: {
      id: "EHwuWBQ8muhjVljW3TFB",
      routeName: "sneakers",
      title: "Sneakers",
      items: [
        {
          imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
          name: "Adidas NMD",
          price: 220,
          id: 10,
        },
        {
          imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
          name: "Adidas Yeezy",
          price: 280,
          id: 11,
        },
        {
          id: 12,
          name: "Black Converse",
          imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
          price: 110,
        },
        {
          price: 160,
          name: "Nike White AirForce",
          imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
          id: 13,
        },
        {
          id: 14,
          name: "Nike Red High Tops",
          imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
          price: 160,
        },
        {
          name: "Nike Brown High Tops",
          id: 15,
          price: 160,
          imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        },
        {
          name: "Air Jordan Limited",
          price: 190,
          imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
          id: 16,
        },
        {
          id: 17,
          name: "Timberlands",
          imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
          price: 200,
        },
      ],
    },
    mens: {
      id: "GUHAj7E4pNHdNaecapmR",
      routeName: "mens",
      title: "Mens",
      items: [
        {
          id: 30,
          name: "Camo Down Vest",
          price: 325,
          imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        },
        {
          price: 20,
          id: 31,
          imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
          name: "Floral T-shirt",
        },
        {
          price: 25,
          id: 32,
          name: "Black & White Longsleeve",
          imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        },
        {
          name: "Pink T-shirt",
          price: 25,
          imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
          id: 33,
        },
        {
          name: "Jean Long Sleeve",
          price: 40,
          id: 34,
          imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        },
        {
          imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
          id: 35,
          price: 25,
          name: "Burgundy T-shirt",
        },
      ],
    },
    hats: {
      id: "NlqNiN7gT0qUlEcgwR1m",
      routeName: "hats",
      title: "Hats",
      items: [
        {
          price: 60,
          imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
          id: 1,
          name: "Brown Brim",
        },
        {
          id: 2,
          price: 18,
          name: "Blue Beanie",
          imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        },
        {
          name: "Brown Cowboy",
          imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
          id: 3,
          price: 40,
        },
        {
          name: "Grey Brim",
          id: 4,
          price: 25,
          imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        },
        {
          id: 5,
          price: 18,
          imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
          name: "Green Beanie",
        },
        {
          id: 6,
          price: 14,
          name: "Palm Tree Cap",
          imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        },
        {
          id: 7,
          name: "Red Beanie",
          imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
          price: 18,
        },
        {
          name: "Wolf Cap",
          id: 8,
          imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
          price: 14,
        },
        {
          name: "Blue Snapback",
          imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
          price: 16,
          id: 9,
        },
      ],
    },
    jackets: {
      id: "jmg6meZqpV7x2pUvEXKG",
      routeName: "jackets",
      title: "Jackets",
      items: [
        {
          imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
          name: "Black Jean Shearling",
          price: 120,
          id: 18,
        },
        {
          id: 19,
          name: "Blue Jean Jacket",
          price: 120,
          imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        },
        {
          imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
          price: 90,
          id: 20,
          name: "Grey Jean Jacket",
        },
        {
          name: "Brown Shearling",
          price: 165,
          imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
          id: 21,
        },
        {
          id: 22,
          name: "Tan Trench",
          imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
          price: 185,
        },
      ],
    },
    womens: {
      id: "vOfIGAZy5mUpeL86wva3",
      routeName: "womens",
      title: "Womens",
      items: [
        {
          imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
          id: 23,
          price: 25,
          name: "Blue Tanktop",
        },
        {
          price: 20,
          imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
          id: 24,
          name: "Floral Blouse",
        },
        {
          id: 25,
          price: 80,
          imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
          name: "Floral Dress",
        },
        {
          name: "Red Dots Dress",
          imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
          price: 80,
          id: 26,
        },
        {
          name: "Striped Sweater",
          id: 27,
          imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
          price: 45,
        },
        {
          name: "Yellow Track Suit",
          price: 135,
          imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
          id: 28,
        },
        {
          id: 29,
          name: "White Blouse",
          imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
          price: 20,
        },
      ],
    },
  };

  return collections;
}
