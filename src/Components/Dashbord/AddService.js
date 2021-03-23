import React from 'react';

const AddService = () => {
    return (
        <form action="https://dmediaworld.com/creative-agency/addservice" method="post">
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label htmlFor="title">Enter Title</label>
                    <input class="form-control" type="text" name="title" id="title" placeholder="Enter Title" />
                </div>

                <div class="form-group col-md-2">
                    <label htmlFor="icon">Upload Icon</label>
                    <input type="file" name="icon" id="icon" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label htmlFor="description">Description</label>
                    <textarea class="form-control" name="description" id="description" cols="30" rows="5" placeholder="Enter Description"></textarea>
                </div>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    );
};

export default AddService;