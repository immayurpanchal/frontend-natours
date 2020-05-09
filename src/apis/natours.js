import Axios from 'axios';

export default Axios.create({
	baseURL:
		`${process.env.REACT_APP_API_BASE_URL}/api/v1` ||
		'http://127.0.0.1:8000/api/v1',
});
