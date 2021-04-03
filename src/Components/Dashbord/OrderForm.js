import React from 'react';

const OrderForm = () => {
    const handelPlaceOrder = (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const catagory = document.getElementById('catagory').value;
        const details = document.getElementById('details').value;
        const price = document.getElementById('price').value;
        const data = {
            username: username,
            email: email,
            catagory: catagory,
            details: details,
            price: price
        }
        fetch('https://creative-agency-jobayer.herokuapp.com/placeorder', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => {
                if (data === true) {
                    document.orderform.reset();
                    alert('Order added successfully!')
                } else {
                    alert('error')
                }
            })

    }
    return (
        <form name="orderform">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" name="username" id="username" placeholder="Enter your Name" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Enter your Email" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" name="catagory" id="catagory" placeholder="Graphic Design" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <textarea class="form-control" name="details" id="details" cols="30" rows="5" placeholder="Project Details"></textarea>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <input class="form-control" type="number" name="price" id="price" placeholder="Price" />
                </div>

                <div class="form-group col-md-2">
                    <input type="file" name="file" placeholder="Upload Project File" id="" />
                </div>
            </div>
            <button onClick={handelPlaceOrder} class="btn btn-brand">Send</button>
        </form>
    );
};

export default OrderForm;