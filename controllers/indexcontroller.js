const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.stripe_create_checkout_session_post = async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Sample Product',
              images: ['https://i.imgur.com/EHyR2nP.png'],
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `https://checkout.stripe.dev/success`,
      cancel_url: `https://checkout.stripe.dev/cancel`,
    });

    return res.status(200).json({ status: 'success', id: session.id });
  } catch (error) {
    return res.status(500).json({ status: 'error', data: 'Server Error' });
  }
};
