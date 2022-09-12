import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface UserState {
  loading: boolean;
  users: string[];
  error: string;
}

const initialState: UserState = {
  loading: false,
  users: [],
  error: '',
};

const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data.map((user: { id: string }) => user.id));
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<string[]>) => {
      (state.loading = false), (state.users = action.payload), (state.error = '');
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loading = false),
        (state.users = []),
        (state.error = action.error.message || 'Something went wrong');
    });
  },
});

export default userSlice.reducer;
export { fetchUsers };
