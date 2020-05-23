import Axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
const token = cookie.get('jwt');

export default Axios.create({
	baseURL:
		`${process.env.REACT_APP_API_BASE_URL}/api/v1` ||
		'http://127.0.0.1:8000/api/v1',
	headers: {
		Authorization: `Bearer ${token}`,
	},
});
