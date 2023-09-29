import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccountMenu from './AccountMenu';
import BasicForm from './BasicForm';
import Home from './Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
export default function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						exact
						path='/'
						element={<Home />}
					/>
					<Route
						exact
						path='/todo'
						element={<BasicForm />}
					/>
				</Routes>
			</Router>
		</div>
	)
// 	const [openForm, setOpenForm] = React.useState(false);
// 	const handleOnClick = (page) => {
// 		console.log('open');
// 		if(!openForm) { 
// 			setOpenForm(true)
// 		} else {
// 			setOpenForm(false)
// 		}
// 	};
//   return (
//     <Container maxWidth="sm">
// 	<AccountMenu onClick={handleOnClick} />
// 	{openForm && <BasicForm />}
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           React Skills test
//         </Typography>
//       </Box>
//     </Container>
//   );
}
