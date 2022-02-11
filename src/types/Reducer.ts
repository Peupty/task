export type TAction<T> = {
  type: T
  payload: any
}

export type TReducer<S, A> = (state: S, action: A) => S
