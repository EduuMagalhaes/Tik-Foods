import React, { useEffect } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import { useNavigate } from 'react-router-dom'

function Home() {

	const navigate = useNavigate()

	useEffect(() => {
		navigate('/acai')
	})	

	return (
		<div>
			<Header />
			<Navigation />
		</div>
	)
}

export default Home
