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

export interface IMovie {
  id: number,
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string
}

export interface ISearchResultPosts{

}
export interface IInitialState {
  movies: [] | IMovie[],
  oneMovie: [] | IMovie[],
  favorites: [] | IMovie[],
  status: null | string,
  error: null | string,
  searchResultMovies: IMovie[] | null
}

// что то непонятное
// export interface IPayload {
//   Response: string,
//   Search: [] | IMovie[],
//   totalResults: string
// }