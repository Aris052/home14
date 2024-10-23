import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from './users.api'


export const AddUser = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { register, handleSubmit, formState: { errors } } = useForm()
	const onSubmit = (data) => {
		dispatch(addUser(data))
		navigate('/')
	}

	return (
		<>
			<h3>Add User</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>Name:</label>
					<input
						type="text"
						{...register('name', { required: 'Name is required' })}
					/>
					{errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
				</div>
				<div>
					<label>Salary:</label>
					<input
						type="number"
						{...register('salary', {
							required: 'Salary is required',
							min: { value: 0, message: 'Salary must be a positive number' }
						})}
					/>
					{errors.salary && <p style={{ color: 'red' }}>{errors.salary.message}</p>}
				</div>
				<button type="submit">Add User</button>
			</form>
		</>
	)
}
