import Footer from './footer/footer'
import Header from './header/header'
import Main from './main/main'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	return (
		<div>
			<Header />
			<Main />
			<Footer />
			<ToastContainer position="bottom-right" autoClose={5000} />
		</div>
	)
}

export default App
