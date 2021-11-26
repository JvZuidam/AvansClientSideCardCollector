import { Injectable } from '@angular/core';
import {cardModel} from "../models/card.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  readonly cards: cardModel[] = [
    {
      id: 89771220,
      name: "Ursarctic Drytron",
      type: "Spell Card",
      desc: "Banish both 1 \"Ursarctic Big Dipper\" and 1 \"Drytron Fafnir\" from your hand and/or field (even if face-down), then Special Summon 1 \"Ursatron, the Celestial Polar Illuminaship\" from your Extra Deck. If \"Ursarctic Polari\" or \"Drytron Alpha Thuban\" is on the field, you can banish 1 of the above cards from your Deck instead. If you would Tribute a monster(s) to activate an \"Ursarctic\" or \"Drytron\" monster's effect, you can banish this card from your GY instead. You can only use this effect of \"Ursarctic Drytron\" once per turn.",
      race: "Normal",
      archetype: "Ursarctic",
      cardSetName: "Burst of Destiny",
      cardSetCode: "BODE-EN066",
      imageSmall: "https://storage.googleapis.com/ygoprodeck.com/pics_small/89771220.jpg",
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/89771220.jpg",
      obtained: true,
      tradeAble: false
    },
    {
      id: 95911373,
      name: "Zoroa, the Magistus Conflagrant Calamity",
      type: "Synchro Monster",
      desc: "1 Spellcaster Tuner + 1+ non-Tuner monsters\r\nIf this card is Synchro Summoned: You can equip 1 \"Magistus\" monster from your Extra Deck to this card. Your opponent cannot activate the effects of monsters with the same card type (Fusion, Synchro, Xyz, or Link) as a \"Magistus\" Monster Card in your Spell & Trap Zone. If this card is in your GY: You can target 1 \"Magistus\" card you control; destroy it, and if you do, Special Summon this card. You can only use this effect of \"Zoroa, the Magistus Conflagrant Calamity\" once per turn.",
      atk: 2900,
      def: 1500,
      level: 8,
      race: "Spellcaster",
      attribute: "FIRE",
      archetype: "Magistus",
      cardSetName: "Burst of Destiny",
      cardSetCode: "BODE-EN045",
      imageSmall: "https://storage.googleapis.com/ygoprodeck.com/pics_small/95911373.jpg",
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/95911373.jpg",
      obtained: false,
      tradeAble: false
    },
    {
      id: 82184400,
      name: "Abyss Keeper",
      type: "Link Monster",
      desc: "2 WATER monsters\r\nCannot be used as Link Material the turn it is Link Summoned. If this card is Link Summoned: You can Special Summon 1 Fish monster from your hand to your zone this card points to. You can target 1 other Fish monster you control and 1 card your opponent controls; banish those cards. You can only use each effect of \"Abyss Keeper\" once per turn.",
      atk: 1500,
      race: "Fish",
      attribute: "WATER",
      linkVal: 2,
      linkMarkers: ["Bottom-Left", "Bottom-Right"],
      cardSetName: "Burst of Destiny",
      cardSetCode: "BODE-EN083",
      imageSmall: "https://storage.googleapis.com/ygoprodeck.com/pics_small/82184400.jpg",
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/82184400.jpg",
      obtained: true,
      tradeAble: false
    },
    {
      id: 81555617,
      name: "Ad Libitum of Despia",
      type: "Effect Monster",
      desc: "During your Main Phase: You can make all face-up monsters currently on the field gain ATK equal to their Level x 100, until the end of your opponent's turn. If this card is used as material for a Fusion Summon from the hand or field, and sent to the GY or banished: You can target 1 of your \"Despia\" monsters or 1 of your Level 8 or higher Fusion Monsters that is banished or in your GY, except \"Ad Libitum of Despia\"; Special Summon it. You can only use each effect of \"Ad Libitum of Despia\" once per turn.",
      atk: 1500,
      def: 2000,
      level: 8,
      race: "Fairy",
      attribute: "DARK",
      archetype: "Despia",
      cardSetName: "Burst of Destiny",
      cardSetCode: "BODE-EN011",
      imageSmall: "https://storage.googleapis.com/ygoprodeck.com/pics_small/81555617.jpg",
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/81555617.jpg",
      obtained: false,
      tradeAble: false
    },
    {
      id: 25573115,
      name: "Apex Predation",
      type: "Trap Card",
      desc: "If you control a Normal Summoned/Set monster: Destroy all Special Summoned monsters on the field. Until the end of your next turn after this card is activated, you cannot Normal Summon/Set. You can only activate 1 \"Apex Predation\" per turn.",
      race: "Normal",
      cardSetName: "Burst of Destiny",
      cardSetCode: "BODE-EN084",
      imageSmall: "https://storage.googleapis.com/ygoprodeck.com/pics_small/25573115.jpg",
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/25573115.jpg",
      obtained: true,
      tradeAble: false
    },

    {
      id: 98204536,
      name: "Chronomaly Temple - Trilithon",
      type: "Spell Card",
      desc: "If you control no monsters, or all monsters you control are \"Chronomaly\" monsters: You can pay 500 LP; immediately after this effect resolves, Normal Summon 1 \"Chronomaly\" monster from your hand. If a \"Chronomaly\" or \"Number\" Xyz Monster you control would activate an effect by detaching material, you can send this card to the GY instead of 1 of those materials. You can only use each effect of \"Chronomaly Temple - Trilithon\" once per turn.",
      race: "Continuous",
      archetype: "Chronomaly",
      cardSetName: "Dawn of Majesty",
      cardSetCode: "DAMA-EN059",
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/98204536.jpg",
      imageSmall: "https://storage.googleapis.com/ygoprodeck.com/pics_small/98204536.jpg",
      obtained: false,
      tradeAble: false
    },
    {
      id: 2609443,
      name: "Chronomaly Vimana",
      type: "XYZ Monster",
      desc: "2 Level 5 monsters\r\nOnce per turn (Quick Effect): You can target 1 face-up monster on the field and 1 Xyz Monster or \"Chronomaly\" monster in your GY; that monster on the field gains half the ATK of that monster in the GY (until the end of this turn), then attach that monster from the GY to this card as material. Once per turn, when your opponent activates a monster effect (Quick Effect): You can detach 2 materials from this card; negate the activation.",
      atk: 2300,
      def: 2600,
      level: 5,
      race: "Machine",
      attribute: "LIGHT",
      archetype: "Chronomaly",
      cardSetName: "Dawn of Majesty",
      cardSetCode: "DAMA-EN044",
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/2609443.jpg",
      imageSmall: "https://storage.googleapis.com/ygoprodeck.com/pics_small/2609443.jpg",
      obtained: true,
      tradeAble: false
    },
    {
      id: 98234196,
      name: "Clavkiys, the Magikey Skyblaster",
      type: "Normal Monster",
      desc: "''Everyone is full of possibilities. Everything you do, moving forwards, stopping, closing, opening, is all in your hands.\r\nThere are many doors in this world. To open them requires the Magic Key... 2 keys and 1 door... 2 wills and 1 body. Once the doors are opened, the worlds will be connected and the great power revealed.''",
      atk: 1900,
      def: 1900,
      level: 4,
      race: "Warrior",
      attribute: "DARK",
      archetype: "Magikey",
      cardSetName: "Dawn of Majesty",
      cardSetCode: "DAMA-EN010",
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/98234196.jpg",
      imageSmall: "https://storage.googleapis.com/ygoprodeck.com/pics_small/98234196.jpg",
      obtained: false,
      tradeAble: false
    },
    {
      id: 291414,
      name: "Converging Wills Dragon",
      type: "Tuner Monster",
      desc: "Cannot be used as Synchro Material, except for the Synchro Summon of a \"Majestic\" monster. This card's name becomes \"Majestic Dragon\" while on the field or in the GY. When you draw this card: You can reveal it; Special Summon it from your hand, then, if you control a Level 8 or higher Dragon Synchro Monster, you can Special Summon 1 Level 1 Dragon monster from your Deck. You can only Special Summon \"Converging Wills Dragon(s)\" once per turn.",
      atk: 0,
      def: 0,
      level: 1,
      race: "Dragon",
      attribute: "LIGHT",
      archetype: "Majestic",
      cardSetName: "Dawn of Majesty",
      cardSetCode: "DAMA-EN001",
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/291414.jpg",
      imageSmall: "https://storage.googleapis.com/ygoprodeck.com/pics_small/291414.jpg",
      obtained: true,
      tradeAble: false
    },
    {
      id: 1487805,
      name: "Cosmic Slicer Zer'oll",
      type: "Link Monster",
      desc: "2+ Reptile monsters\r\nMonsters your opponent controls with A-Counters are changed to Defense Position, also neither player can activate their effects. You can only use each of the following effects of \"Cosmic Slicer Zer'oll\" once per turn. If this card is Link Summoned: You can add 1 card from your Deck to your hand that has an effect that places A-Counter(s). You can remove 2 A-Counters from anywhere on the field; immediately after this effect resolves, Normal Summon 1 Reptile monster.",
      atk: 2600,
      race: "Reptile",
      attribute: "LIGHT",
      archetype: "Alien",
      linkVal: 3,
      linkMarkers: ["Bottom-Left","Bottom-Right","Top"],
      cardSetName: "Dawn of Majesty",
      cardSetCode: "DAMA-EN047",
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/1487805.jpg",
      imageSmall: "https://storage.googleapis.com/ygoprodeck.com/pics_small/1487805.jpg",
      obtained: false,
      tradeAble: false
    }

  ]

  constructor() { }

  getCards(): cardModel[] {
    console.log("getCards aangeroepen");
    return this.cards;
  }

  //TODO: Cards are getting put into the same array and then returned
  getCardsBySetName(setName: String): cardModel[] {
    const cardArr = [];
    console.log("getCardsBySetName aangeroepen");
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].cardSetName == setName) {
        cardArr.push(this.cards[i])
      }
    }
    return cardArr;
  }

  getCardById(id: number): cardModel {
    console.log("getCardById aangeroepen");
    return this.cards.filter((card) => card.id === id)[0];
  }
}
