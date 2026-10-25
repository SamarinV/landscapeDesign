import Footer from './footer/footer'
import Header from './header/header'
import Main from './main/main'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
	palette: { primary: { main: '#252723' }, text: { primary: '#252723', secondary: '#686e64' } },
	typography: { fontFamily: 'Arial, sans-serif', button: { textTransform: 'none' } },
	shape: { borderRadius: 0 },
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Main />
			<Footer />
			<ToastContainer position="bottom-right" autoClose={5000} />
		</ThemeProvider>
	)
}

export default App
