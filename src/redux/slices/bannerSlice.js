import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action to fetch banner data
export const fetchBannerData = createAsyncThunk(
  'banner/fetchBannerData',
  async () => {
    const response = await fetch('/api/banner'); // Replace with your API endpoint
    const data = await response.json();
    return data;
  }
);

const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    rotateTextArray: [],
    fixedHeading: 'Default Heading',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBannerData.fulfilled, (state, action) => {
        state.rotateTextArray = action.payload.rotateTextArray;
        state.fixedHeading = action.payload.fixedHeading;
        state.loading = false;
      })
      .addCase(fetchBannerData.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default bannerSlice.reducer;
