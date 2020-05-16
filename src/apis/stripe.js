import natours from './natours';
import { loadStripe } from '@stripe/stripe-js';
import Cookies from 'universal-cookie';

export const bookTour = async (tourId) => {
	try {
		const stripe = await loadStripe(
			'pk_test_wKdTXJVjDKfLeNCkPK0pTFJk00RwisgQeD'
		);
		//  1) Get Checkout session from API
		// const session = await natours.get(`/bookings/checkout-session/${tourId}`);
		const cookie = new Cookies();
		const token = cookie.get('jwt');

		const res = await natours.get(`/bookings/checkout-session/${tourId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		// 2) redirect to checkout and charge credit card
		stripe.redirectToCheckout({
			sessionId: res.data.session.id,
		});
	} catch (error) {
		console.log(error);
	}
};
