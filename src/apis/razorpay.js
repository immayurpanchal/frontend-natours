export const displayRazorPay = async (options) => {
	const paymentObject = new window.Razorpay(options);
	paymentObject.open();
};

const loadScript = (src) => {
	return new Promise((resolve) => {
		const script = document.createElement('script');
		script.src = src;
		document.body.appendChild(script);
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
	});
};

export const loadRazorPay = async () => {
	const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

	if (!res) {
		alert('RazorPay failed to load! Are you online?');
		return;
	}
};

export let paymentResponse;
export const fillOrder = ({ tour, user, order }, cb) => {
	const options = {
		key: 'rzp_test_66u1zZVNZ67aCA', // Enter the Key ID generated from the Dashboard
		amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
		currency: 'INR',
		name: tour.name,
		description: `${tour.description.slice(0, 250)}...`,
		image: 'https://www.natours.dev/img/logo-white.png',
		order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
		handler: function (res) {
			cb(res);
		},
		prefill: {
			name: user.profile.name,
			email: user.profile.email,
		},
	};

	return options;
};
