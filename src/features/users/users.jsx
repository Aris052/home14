import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from './users.api'

export const Users = () => {
	const users = useSelector(state => state.accounts)
	const status = useSelector(state => state.status)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getUsers())
	}, [])

	return <>
		<h3>{users.length}</h3>
		{
			users.map(acc => <div key={acc.id}>
				<p>{acc.name} {acc.salary}</p>
			</div>)
		}
		<p>{status}</p>
		<Link to={"/add"}>add</Link>
	</>
}