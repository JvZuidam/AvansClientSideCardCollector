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
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/89771220.jpg",
      obtained: false
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
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/95911373.jpg",
      obtained: false
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
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/82184400.jpg",
      obtained: false
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
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/81555617.jpg",
      obtained: false
    },
    {
      id: 25573115,
      name: "Apex Predation",
      type: "Trap Card",
      desc: "If you control a Normal Summoned/Set monster: Destroy all Special Summoned monsters on the field. Until the end of your next turn after this card is activated, you cannot Normal Summon/Set. You can only activate 1 \"Apex Predation\" per turn.",
      race: "Normal",
      cardSetName: "Burst of Destiny",
      cardSetCode: "BODE-EN084",
      image: "https://storage.googleapis.com/ygoprodeck.com/pics/25573115.jpg",
      obtained: false
    }
  ]

  constructor() { }

  getCards(): cardModel[] {
    console.log("getCards aangeroepen");
    return this.cards;
  }

  getCardsBySetName(setName: String): cardModel {
    console.log("getCardsBySetName aangeroepen");
    return this.cards.filter((card) => card.cardSetName === setName)[0];
  }

}
