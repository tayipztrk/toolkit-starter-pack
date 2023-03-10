import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import counterReducer from './counter/counterSlice'
import todoReducer from './todo/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


//typed dispatch and selector can use with this two lines
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;