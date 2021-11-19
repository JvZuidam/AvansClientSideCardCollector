export class setModel {
  id: number = 0;
  setName: string = '';
  setCode: string = '';
  numberOfCards: number = 0;
  releaseDate: Date;


  constructor(id: number, setName: string, setCode: string, numberOfCards: number) {
    this.id = id;
    this.setName = setName;
    this.setCode = setCode;
    this.numberOfCards = numberOfCards;
    this.releaseDate = new Date();
  }
}
