interface ITime {
  // [key: string]: any,
  year: number,
  month: number,
  date: number,
  hour: number,
  minute: number,
  second: number,
  fullDate: Date,
}

interface IMassage {
  avatar: string;
  name: string;
  text: string;
  time: string;
}

interface List {
  [key: string]: IMassage;
}