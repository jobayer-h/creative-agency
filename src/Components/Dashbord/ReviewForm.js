import React from 'react';

const ReviewForm = () => {
    return (
        <form action="https://dmediaworld.com/creative-agency/submitreview" method="post">
        <div class="form-row">
            <div class="form-group col-md-6">
                <input type="text" class="form-control" name="username" id="" placeholder="Your name" />
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <input type="text" class="form-control" name="company" id="" placeholder="Company’s name, Designation" />
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <textarea class="form-control" name="description" id="" cols="30" rows="5" placeholder="Description"></textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-brand">Submit</button>
    </form>
    );
};

export default ReviewForm;