import natours from '../../apis/natours';
import { displayRazorPay, fillOrder, loadRazorPay } from '../../apis/razorpay';
import history from '../history';

export const createBooking = (tourId) => {
	return async (dispatch, getState) => {
		const {
			tours: { tour },
			user,
		} = getState();

		try {
			// 1. Get payment object from server
			const {
				data: { order },
			} = await natours.get(`bookings/checkout-session/${tour.id}`);

			// 2. Load razor pay
			await loadRazorPay();

			let paymentDone = async (razorpaySuccess) => {
				// 5. store razorpay payment success response
				const { data } = await natours.post('/bookings', {
					tour: tour.id,
					user: user.profile.id,
					price: order.amount,
					paymentId: razorpaySuccess.razorpay_payment_id,
					orderId: razorpaySuccess.razorpay_order_id,
					signature: razorpaySuccess.razorpay_signature,
				});

				if (data.status === 'success') {
					history.push('/');
				}
			};

			// 3. Fill order object with additional details
			const options = await fillOrder(
				{
					tour,
					user,
					order: order,
				},
				paymentDone
			);

			// 4. Display popup
			await displayRazorPay(options);
		} catch (err) {
			console.log(err);
		}
	};
};
