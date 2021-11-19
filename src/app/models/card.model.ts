export class cardModel {
  id: number = 0
  name: string = '';
  type: string = '';
  desc: string = '';
  archetype: string = '';
  race: string = '';
  image: string = '';


  // Every card belongs to a set and has a code (number which card it is within the set.
  cardSetName: string = '';
  cardSetCode: string = '';

  // Optional properties since not every card (monster, spell, trap) has the same properties.
  atk?: number;
  def?: number;
  level?: number;
  attribute?: string;
  obtained: boolean = false;

  constructor(id: number, name: string, type: string, desc: string, archetype: string, cardSetName: string, cardSetCode: string, image: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.desc = desc;
    this.archetype = archetype;
    this.cardSetName = cardSetName;
    this.cardSetCode = cardSetCode;
    this.image = image;
  }



}
