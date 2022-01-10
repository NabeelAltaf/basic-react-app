import React, { useState } from "react";


export const AddTransaction = () => {

    // Two state objects to store the data that will be inserted.
    const [description, setDescription] = useState ();
    const [transactionAmount, setTransactionAmount] = useState ();

    // Must link the states to the actual form. Whenever we enter the values, we want to add those to our state.


    // How do we do this? We need to link this form to our state by going to your input and putting attribute value

    return (

        <div>
            <h3>Add New Transaction</h3>

            <form>
                <div className="form-control">
                    <label htmlfor = "description">
                        Description
                    </label>
                    <input type = "text" id = "description" placeholder = "Detail on Transaction" value = {description}
                    onChange = {(e) => setDescription(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label htmlfor = "transactionamount">
                        Transaction Amount
                    </label>
                    <input type = "number" id = "transactionamount" placeholder = "Enter the transaction amount" value = {transactionAmount}
                    onChange = {(e) => setTransactionAmount(e.target.value)}></input>
                </div>

                <button className="btn">Add Transaction</button>
                </form>
        </div>

    )
}