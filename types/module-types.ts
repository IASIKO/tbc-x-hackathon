export interface Answers {
  id: number;
  description: string;
}

export interface QuestionsType {
  description: string;
  imagePath: string;
  answers: Answers[];
}
