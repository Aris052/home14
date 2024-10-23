import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk("users/get", async () => {
	const response = await axios.get("http://localhost:3004/users")
	return response.data
})

export const addUser = createAsyncThunk("users/add", async (newUser) => {
	const response = await axios.post("http://localhost:3004/users", newUser)
	return response.data
})