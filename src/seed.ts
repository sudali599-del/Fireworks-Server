import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://asdfqqqwsf12311:A5LUowYIK01Bz5Hi@cluster0.4euabaf.mongodb.net/fireworks?retryWrites=true&w=majority&appName=Cluster0";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  actualPrice: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  productDescription: { type: String, required: true },
  productType: { type: String, required: true },
  imageData: { type: Buffer },
  imageType: { type: String },
  imageName: { type: String }
}, { timestamps: true });

const ProductModel = mongoose.model("Product", ProductSchema);

const PRODUCTS_2026 = [
  {
    "name": "2\" Lakshmi",
    "actualPrice": 25,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "ONE SOUND CRACKERS"
  },
  {
    "name": "2 3/4\" Kuruvi",
    "actualPrice": 50,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "ONE SOUND CRACKERS"
  },
  {
    "name": "3 1/2\" Lakshmi, Pen Ten & Parrot",
    "actualPrice": 60,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "ONE SOUND CRACKERS"
  },
  {
    "name": "4\" Lakshmi, Chhota Bheem & Parrot",
    "actualPrice": 80,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "ONE SOUND CRACKERS"
  },
  {
    "name": "4\" Super Deluxe Lady",
    "actualPrice": 150,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "ONE SOUND CRACKERS"
  },
  {
    "name": "12 Ply Kumki",
    "actualPrice": 160,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "ONE SOUND CRACKERS"
  },
  {
    "name": "4\" Gold Lakshmi",
    "actualPrice": 160,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "ONE SOUND CRACKERS"
  },
  {
    "name": "5\" Bahubali",
    "actualPrice": 250,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "ONE SOUND CRACKERS"
  },
  {
    "name": "Jallikattu",
    "actualPrice": 275,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "ONE SOUND CRACKERS"
  },
  {
    "name": "Street Fighter",
    "actualPrice": 500,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "ONE SOUND CRACKERS"
  },
  {
    "name": "Paper Vedi - (1/4 Kg)",
    "actualPrice": 250,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "ONE SOUND CRACKERS"
  },
  {
    "name": "Paper Vedi - (1/2 Kg)",
    "actualPrice": 500,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "ONE SOUND CRACKERS"
  },
  {
    "name": "Flower Pots Small (10Pcs)",
    "actualPrice": 250,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "FLOWER POTS"
  },
  {
    "name": "Flower Pots Big (10Pcs)",
    "actualPrice": 325,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "FLOWER POTS"
  },
  {
    "name": "Flower Pots Special (10Pcs)",
    "actualPrice": 375,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "FLOWER POTS"
  },
  {
    "name": "Flower Pots Asoka (10Pcs)",
    "actualPrice": 550,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "FLOWER POTS"
  },
  {
    "name": "Colour Kotti (10Pcs)",
    "actualPrice": 950,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "FLOWER POTS"
  },
  {
    "name": "Flower Pots Deluxe (5Pcs)",
    "actualPrice": 800,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "FLOWER POTS"
  },
  {
    "name": "Luck (5Pcs)(red&Green)(5Pcs)",
    "actualPrice": 750,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "FLOWER POTS"
  },
  {
    "name": "Chakkar Big (10 Pcs)",
    "actualPrice": 150,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "GROUND CHAKKAR"
  },
  {
    "name": "Chakkar Big(25 Pcs)",
    "actualPrice": 350,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "GROUND CHAKKAR"
  },
  {
    "name": "Chakkar Special (10 Pcs)",
    "actualPrice": 280,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "GROUND CHAKKAR"
  },
  {
    "name": "Chakkar Deluxe (10 Pcs)",
    "actualPrice": 550,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "GROUND CHAKKAR"
  },
  {
    "name": "Wire Chakkar (10 Pcs)",
    "actualPrice": 725,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "GROUND CHAKKAR"
  },
  {
    "name": "Special Spinner (10 Pcs)",
    "actualPrice": 425,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "GROUND CHAKKAR"
  },
  {
    "name": "Spinner Mix (8 Pcs)",
    "actualPrice": 800,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "GROUND CHAKKAR"
  },
  {
    "name": "Baby Rocket",
    "actualPrice": 150,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "ROCKETS"
  },
  {
    "name": "Lunik Express Rocket",
    "actualPrice": 500,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "ROCKETS"
  },
  {
    "name": "2 Sound Rocket",
    "actualPrice": 600,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "ROCKETS"
  },
  {
    "name": "Colour Rocket",
    "actualPrice": 275,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "ROCKETS"
  },
  {
    "name": "Musical Rocket",
    "actualPrice": 750,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "ROCKETS"
  },
  {
    "name": "1 1/2\" Twinkling Star(10Pcs)",
    "actualPrice": 100,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "TWINKLING STAR"
  },
  {
    "name": "4\" Twinkling Star (10 Pcs)",
    "actualPrice": 275,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "TWINKLING STAR"
  },
  {
    "name": "28 Chorsa Crackers",
    "actualPrice": 70,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "ELECTRIC CRACKERS"
  },
  {
    "name": "56 Chorsa Crackers",
    "actualPrice": 150,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "ELECTRIC CRACKERS"
  },
  {
    "name": "28 Giant",
    "actualPrice": 125,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "ELECTRIC CRACKERS"
  },
  {
    "name": "56 Giant",
    "actualPrice": 250,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "ELECTRIC CRACKERS"
  },
  {
    "name": "24 DLX",
    "actualPrice": 200,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "DELUXE CRACKERS"
  },
  {
    "name": "50 DLX",
    "actualPrice": 600,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "DELUXE CRACKERS"
  },
  {
    "name": "100 Power",
    "actualPrice": 200,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL GARLANDS"
  },
  {
    "name": "Silver Crackers(1k Fast)",
    "actualPrice": 900,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL GARLANDS"
  },
  {
    "name": "Gold Crackers(2k)",
    "actualPrice": 1800,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL GARLANDS"
  },
  {
    "name": "Platinum Crackers(5k)",
    "actualPrice": 4500,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL GARLANDS"
  },
  {
    "name": "Diamond Crackers(10k)",
    "actualPrice": 9000,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL GARLANDS"
  },
  {
    "name": "Red Bijilli (50 Pcs)",
    "actualPrice": 80,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "BIJILI"
  },
  {
    "name": "Stripped Bijilli (100 Pcs)",
    "actualPrice": 225,
    "discount": 0,
    "productDescription": "1 Pkt",
    "productType": "BIJILI"
  },
  {
    "name": "Bullet Bomb (10 Pcs)",
    "actualPrice": 150,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "BOMBS"
  },
  {
    "name": "Hydro Bomb(10 Pcs)",
    "actualPrice": 250,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "BOMBS"
  },
  {
    "name": "King of King(Karkil)(10 Pcs)",
    "actualPrice": 350,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "BOMBS"
  },
  {
    "name": "Jug Mug (10 Pcs)",
    "actualPrice": 450,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "BOMBS"
  },
  {
    "name": "Digital-Seven Ply (10 Pcs)",
    "actualPrice": 900,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "BOMBS"
  },
  {
    "name": "King Raider (10 Pcs)",
    "actualPrice": 1600,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "BOMBS"
  },
  {
    "name": "Selfi Stick",
    "actualPrice": 160,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "PENCIL"
  },
  {
    "name": "Colour Smoke-Rainbowcolour(3Pcs)",
    "actualPrice": 750,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "PENCIL"
  },
  {
    "name": "Olympic Torch (3 Pcs)",
    "actualPrice": 650,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "PENCIL"
  },
  {
    "name": "Jelly Candle",
    "actualPrice": 400,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "PENCIL"
  },
  {
    "name": "7 cm Electric Sparklers(10Pcs)",
    "actualPrice": 50,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "7cm Color Sparklers(10Pcs)",
    "actualPrice": 60,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "7cm Green Sparklers(10Pcs)",
    "actualPrice": 65,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "7cm Red Sparklers(10Pcs)",
    "actualPrice": 80,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "10cm Electric Sparklers(10Pcs)",
    "actualPrice": 85,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "10 cm Color Sparklers(10Pcs)",
    "actualPrice": 95,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "10 cm Green Sparklers(10Pcs)",
    "actualPrice": 110,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "10 cm Red Sparklers(10Pcs)",
    "actualPrice": 125,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "12 cm Electric Sparklers(10Pcs)",
    "actualPrice": 125,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "12 cm Color Sparklers(10Pcs)",
    "actualPrice": 140,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "12 cm Green Sparklers(10Pcs)",
    "actualPrice": 150,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "12 cm Red Sparklers(10Pcs)",
    "actualPrice": 170,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "15 cm Electric Sparklers(10Pcs)",
    "actualPrice": 185,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "15 cm Color Sparklers(10Pcs)",
    "actualPrice": 205,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "15 cm Green Sparklers(10Pcs)",
    "actualPrice": 225,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "15 cm Red Sparklers(10Pcs)",
    "actualPrice": 260,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "15cm Silver Drops",
    "actualPrice": 345,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "15cm 5 in 1",
    "actualPrice": 1600,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "30 cm Electric Sparklers(5Pcs)",
    "actualPrice": 185,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "30 cm Color Sparklers(5Pcs)",
    "actualPrice": 205,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "30 cm Green Sparklers(5Pcs)",
    "actualPrice": 225,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "30 cm Red Sparklers(5Pcs)",
    "actualPrice": 260,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "50 cm Electric Sparklers(5Pcs)",
    "actualPrice": 825,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "50 cm colour Sparklers(5Pcs)",
    "actualPrice": 925,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "50cm Multimix Sparklers(5Pcs)",
    "actualPrice": 950,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "Rotating Sparklers",
    "actualPrice": 1075,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "75cm Elerteric Sparklers",
    "actualPrice": 1150,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "75cm Colour Sparklers",
    "actualPrice": 1250,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPARKLERS"
  },
  {
    "name": "Pogo (5 Pcs)",
    "actualPrice": 720,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "MULTI COLOUR FOUNTAINS"
  },
  {
    "name": "Shinchan Ti Colour Fountain (3 Pcs)",
    "actualPrice": 600,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "MULTI COLOUR FOUNTAINS"
  },
  {
    "name": "Motu Patlu Tricolour Fountain (5 Pcs)",
    "actualPrice": 880,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "MULTI COLOUR FOUNTAINS"
  },
  {
    "name": "Splatoon-Tricolour Fountain Super Deluxe(5Pcs)",
    "actualPrice": 1400,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "MULTI COLOUR FOUNTAINS"
  },
  {
    "name": "Peacock Feather (5 Pcs)",
    "actualPrice": 450,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "PEACOCK FOUNTAIN"
  },
  {
    "name": "Mini Peacock",
    "actualPrice": 600,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "PEACOCK FOUNTAIN"
  },
  {
    "name": "Peacock 5 in 1 (gold,green,white)",
    "actualPrice": 900,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "PEACOCK FOUNTAIN"
  },
  {
    "name": "Dancing Peacock",
    "actualPrice": 750,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "PEACOCK FOUNTAIN"
  },
  {
    "name": "Magic Peacock (3 in 1)",
    "actualPrice": 750,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "PEACOCK FOUNTAIN"
  },
  {
    "name": "Peacock Mega-Multi Colour(padak)",
    "actualPrice": 2500,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "PEACOCK FOUNTAIN"
  },
  {
    "name": "Mini Siren (5 Pcs)",
    "actualPrice": 575,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "MUSICAL ITEMS"
  },
  {
    "name": "Mega Siren (3 Pcs)",
    "actualPrice": 750,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "MUSICAL ITEMS"
  },
  {
    "name": "Butterfly (10 Pcs)",
    "actualPrice": 325,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "MUSICAL ITEMS"
  },
  {
    "name": "Bambara Spinner (10 Pcs)",
    "actualPrice": 400,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "MUSICAL ITEMS"
  },
  {
    "name": "Helicopter (5 Pcs)",
    "actualPrice": 400,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL FANCY"
  },
  {
    "name": "Drone (5 Pcs)",
    "actualPrice": 650,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL FANCY"
  },
  {
    "name": "Feast Show (5 Pcs)",
    "actualPrice": 500,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL FANCY"
  },
  {
    "name": "Army Force (5 Pcs)",
    "actualPrice": 500,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL FANCY"
  },
  {
    "name": "Sky Dancer (5 Pcs)",
    "actualPrice": 550,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL FANCY"
  },
  {
    "name": "Cool Collection (5 Pcs)",
    "actualPrice": 775,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL FANCY"
  },
  {
    "name": "11/4\" Chotta",
    "actualPrice": 175,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL FANCY SHOTS"
  },
  {
    "name": "2\" Pipe (3 Pcs)",
    "actualPrice": 1050,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL FANCY SHOTS"
  },
  {
    "name": "21/2\" Pipe Royal Fancy",
    "actualPrice": 650,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL FANCY SHOTS"
  },
  {
    "name": "3\" color Pipe Fancy",
    "actualPrice": 1250,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL FANCY SHOTS"
  },
  {
    "name": "31/2\" color Pipe Fancy",
    "actualPrice": 1350,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL FANCY SHOTS"
  },
  {
    "name": "31/2\" Seven Step Colour PipeFancy",
    "actualPrice": 1600,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL FANCY SHOTS"
  },
  {
    "name": "4\" Colour Pipe Fancy",
    "actualPrice": 1400,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL FANCY SHOTS"
  },
  {
    "name": "4\" Nayagara Falls",
    "actualPrice": 1500,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL FANCY SHOTS"
  },
  {
    "name": "7 Shots (5 Pcs)",
    "actualPrice": 350,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL MULTI SHOTS FANCY"
  },
  {
    "name": "12 Shots",
    "actualPrice": 750,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL MULTI SHOTS FANCY"
  },
  {
    "name": "30 Shots",
    "actualPrice": 2100,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL MULTI SHOTS FANCY"
  },
  {
    "name": "60 Shots",
    "actualPrice": 4200,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL MULTI SHOTS FANCY"
  },
  {
    "name": "120 Shots",
    "actualPrice": 8400,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL MULTI SHOTS FANCY"
  },
  {
    "name": "240 Shots",
    "actualPrice": 16800,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "AERIAL MULTI SHOTS FANCY"
  },
  {
    "name": "Trix/Goodly/Minions(3 Pcs)",
    "actualPrice": 700,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Colour Rain (5 Pcs)",
    "actualPrice": 450,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Golden Vlobe (5 Pcs)",
    "actualPrice": 450,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Tweet/Poppings/6000",
    "actualPrice": 575,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Lotus (3 Pcs)",
    "actualPrice": 550,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Reen/Red/Green/Silver/Golden Star(3Pcs)",
    "actualPrice": 700,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Gold Feast, Red Sun, Reen Garden, Blue Ics(5 Pcs)",
    "actualPrice": 800,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Power Pot (5 Pcs)",
    "actualPrice": 900,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Twix (5 Pcs)",
    "actualPrice": 700,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Sun Feast (5 Pcs)",
    "actualPrice": 750,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Croods/Angel Time/GoldFish",
    "actualPrice": 750,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Money Bank (Millionare)(2 Pcs)",
    "actualPrice": 900,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Wonder 3 in 1 Crackling",
    "actualPrice": 1050,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Pom Pom (30 Pcs)",
    "actualPrice": 1050,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Rope Colour (4 Pcs)",
    "actualPrice": 1000,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Touch me Falls",
    "actualPrice": 700,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Angry Bird",
    "actualPrice": 1350,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Carnival/Tweet Bird/Jiggles/Bingo(3 Pcs)",
    "actualPrice": 600,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "Colour Gems",
    "actualPrice": 550,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FANCY FOUNTAINS"
  },
  {
    "name": "MRF Bat and Ball",
    "actualPrice": 1200,
    "discount": 0,
    "productDescription": "1No",
    "productType": "SPECIAL FOUNTAINS"
  },
  {
    "name": "90 Watts",
    "actualPrice": 550,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FOUNTAINS"
  },
  {
    "name": "H2O Falls",
    "actualPrice": 650,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FOUNTAINS"
  },
  {
    "name": "King Fisher/Henieken/crystal-Tinbeer",
    "actualPrice": 375,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FOUNTAINS"
  },
  {
    "name": "Old is Gold",
    "actualPrice": 800,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FOUNTAINS"
  },
  {
    "name": "Mini Rail",
    "actualPrice": 250,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FOUNTAINS"
  },
  {
    "name": "Photo Flash (5 Pcs)",
    "actualPrice": 200,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FOUNTAINS"
  },
  {
    "name": "I Cone (2 Pcs)",
    "actualPrice": 1000,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "SPECIAL FOUNTAINS"
  },
  {
    "name": "Rock Stars",
    "actualPrice": 700,
    "discount": 0,
    "productDescription": "1No",
    "productType": "NEW ARRIVAL FOUNTAINS"
  },
  {
    "name": "Sizzling Star",
    "actualPrice": 950,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "NEW ARRIVAL FOUNTAINS"
  },
  {
    "name": "Jolly Poppy",
    "actualPrice": 2500,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "NEW ARRIVAL FOUNTAINS"
  },
  {
    "name": "King Version",
    "actualPrice": 900,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "NEW ARRIVAL FOUNTAINS"
  },
  {
    "name": "Kulfi (2 Pcs)",
    "actualPrice": 1500,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "NEW ARRIVAL FOUNTAINS"
  },
  {
    "name": "Magic Pops",
    "actualPrice": 35,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "CHILDRENS SPECIAL"
  },
  {
    "name": "Jee Boom Baa",
    "actualPrice": 35,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "CHILDRENS SPECIAL"
  },
  {
    "name": "Electric Stone",
    "actualPrice": 40,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "CHILDRENS SPECIAL"
  },
  {
    "name": "Cartoon (5 Pcs)",
    "actualPrice": 50,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "CHILDRENS SPECIAL"
  },
  {
    "name": "Kit Kat",
    "actualPrice": 160,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "CHILDRENS SPECIAL"
  },
  {
    "name": "Asrafi Big(5 Pcs)",
    "actualPrice": 200,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "CHILDRENS SPECIAL"
  },
  {
    "name": "Super Dulex",
    "actualPrice": 400,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "CHILDRENS SPECIAL"
  },
  {
    "name": "Pokemon-Queen10in1(laptop)",
    "actualPrice": 750,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "CHILDRENS SPECIAL"
  },
  {
    "name": "Roll Caps",
    "actualPrice": 450,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "CHILDRENS SPECIAL"
  },
  {
    "name": "Black Serpnet (1 Tozen)",
    "actualPrice": 250,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "CHILDRENS SPECIAL"
  },
  {
    "name": "20 Items",
    "actualPrice": 1250,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "GIFT BOXES"
  },
  {
    "name": "30 Items",
    "actualPrice": 1750,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "GIFT BOXES"
  },
  {
    "name": "40 Items",
    "actualPrice": 2750,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "GIFT BOXES"
  },
  {
    "name": "50 Items",
    "actualPrice": 3750,
    "discount": 0,
    "productDescription": "1 Box",
    "productType": "GIFT BOXES"
  }
];

async function seed() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI as string);
    console.log("Connected to MongoDB.");
    console.log("Clearing existing products...");
    await ProductModel.deleteMany({});
    console.log(`Seeding ${PRODUCTS_2026.length} authentic 2026 Diwali products...`);
    await ProductModel.insertMany(PRODUCTS_2026);
    console.log(`Successfully seeded ${PRODUCTS_2026.length} products into MongoDB!`);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seed();
