import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Todo text..." }],
};

const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {},
});
