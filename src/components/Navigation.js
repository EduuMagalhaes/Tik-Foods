import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
	const { pathname } = useLocation()

	return (
		<nav className="nav-bar">
			<Link
				className={pathname === '/acai' ? 'page-link -active' : 'page-link'}
				to="/acai"
			>
				Açai
			</Link>
			<Link
				className={pathname === '/cupuacu' ? 'page-link -active' : 'page-link'}
				to="/cupuacu"
			>
				Cupuaçu
			</Link>
			<Link
				className={pathname === '/macarrao' ? 'page-link -active' : 'page-link'}
				to="/macarrao"
			>
				Macarrão
			</Link>
		</nav>
	)
}

export default Navigation
