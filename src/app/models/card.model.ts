export class cardModel {
  id: number = 0
  name: string = '';
  type: string = '';
  desc: string = '';

  race: string = '';
  imageSmall: string = '';
  image: string = '';


  // Every card belongs to a set and has a code (number which card it is within the set.
  cardSetName: string = '';
  cardSetCode: string = '';

  // Optional properties since not every card (monster, spell, trap) has the same properties.
  atk?: number;
  def?: number;
  level?: number;
  attribute?: string;
  archetype?: string;
  linkVal?: number;
  linkMarkers?: string[];

  //Later used in the collection entity to see if the user has the card
  obtained: boolean = false;
  tradeAble: boolean = false;


  constructor(id: number, name: string, type: string, desc: string, race: string, cardSetName: string, cardSetCode: string, imageSmall: string, image: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.desc = desc;
    this.race = race;
    this.cardSetName = cardSetName;
    this.cardSetCode = cardSetCode;
    this.imageSmall = imageSmall;
    this.image = image;
  }



}
