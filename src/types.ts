export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Windy = "windy",
  Stormy = "stormy",
}

export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}

export interface DiaryEntry {
  id: Number;
  date: String;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

//export type NonSensitiveIn = Pick<DiaryEntry, 'id'| 'date'| 'weather'| 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;

export type NewDiaryEntry = Omit<DiaryEntry, "id">;
