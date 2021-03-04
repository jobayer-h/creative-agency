import React from 'react';

const OrderForm = () => {
    return (
        <form action="https://creative-agency-jobayer.herokuapp.com/placeorder" method="post">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" name="username" id="" placeholder="Enter your Name" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="email" class="form-control" name="email" placeholder="Enter your Email" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" name="catagory" placeholder="Graphic Design" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <textarea class="form-control" name="details" id="" cols="30" rows="5" placeholder="Project Details"></textarea>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <input class="form-control" type="number" name="price" id="" placeholder="Price" />
                </div>

                <div class="form-group col-md-2">
                    <input type="file" name="file" placeholder="Upload Project File" id="" />
                </div>
            </div>
            <button type="submit" class="btn btn-brand">Send</button>
        </form>
    );
};

export default OrderForm;