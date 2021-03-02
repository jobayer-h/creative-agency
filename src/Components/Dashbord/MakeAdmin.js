import React from 'react';

const MakeAdmin = () => {
    return (
        <form>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <input type="email" class="form-control" name="adminemail" id="" placeholder="Email" />
                </div>
                <div class="form-group col-md-4">
                    <input type="submit" className="btn btn-success" value="Submit"/>
                </div>
            </div>
        </form>
    );
};

export default MakeAdmin;