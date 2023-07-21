import { createBrowserRouter } from 'react-router-dom'
import SpaceTabler from '../spaces/SpaceTabler'


export const router = createBrowserRouter([
	{
		path: '/',
		element:  <SpaceTabler />,
	},
])

