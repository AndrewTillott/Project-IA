const stripeHandler = StripeCheckout.configure({
    key: stripePublicKey,
    locale: 'en',
    token: function(token) {
        console.log(token.id);
        //this token needs to be send to the server to be processed

        //perhaps use a fetch() promise to sne this over
    }
})

const makePayment = () => {

    const budgetField = document.getElementById('amount');

    stripeHandler.open({
        amount: budgetField.value*100
    });
};
