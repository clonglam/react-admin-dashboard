import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CounterState {
  isMenuOpen: boolean
}

// Define the initial state using that type
const initialState: CounterState = {
  isMenuOpen: true,
}

export const stateSlice = createSlice({
  name: 'state',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleSideMenu: (state, action: PayloadAction) => {
      state.isMenuOpen = !state.isMenuOpen
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
  },
})

export const { toggleSideMenu } = stateSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMenuState = (state: RootState): boolean =>
  state.state.isMenuOpen

export default stateSlice.reducer
