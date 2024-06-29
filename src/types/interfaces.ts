export interface IButton {
  text: string,
  type: string,
  isDisabled: boolean
}

export interface IInput {
  title: string,
  type: string,
  placeholder: string,
  autocomplete?: string,
  onChange?: (event: any) => void,
  isDisabled: boolean
}

export interface IRating {
  Source: string;
  Value: string;
}
export interface IMovie {
  id: number,
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string,
  imdbRating: string,
  Writer: string,
  Director: string,
  Actors: string,
  Production: string,
  Country: string,
  BoxOffice: string,
  Released: string,
  Plot: string,
  Runtime: string,
  Ratings: IRating[],
  Genre: string
}

export interface ISelectedMovie extends Omit<IMovie, 'id'> {
  Awards: string;
  DVD: string;
  Language: string;
  Metascore: string;
  Rated: string;
  Response: string;
  Website: string;
  imdbVotes: string;
}
export interface ISearchResultPosts {
  Response?: string;
  Error?: string;
  Search?: IMovie[];
  totalResults?: string;
}
export interface IInitialState {
  movies: [] | IMovie[],
  oneMovie: [] | IMovie[],
  favorites: [] | IMovie[],
  status: null | string,
  error: null | string,
  searchTerm: string,
  searchResultMovies: IMovie[] | null
}

export interface IPayload {
  Response: string,
  Search: [] | IMovie[],
  totalResults: string
}