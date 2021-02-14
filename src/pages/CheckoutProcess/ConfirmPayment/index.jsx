import './confirmpayment.css'
import { useHistory } from 'react-router-dom'

export default () => {
    const history = useHistory();


    return (<div >
        <p className="text-4xl mb-6 text-purple font-bold">Complete your Purchase</p>

        <div>
            <div className="flex flex-row justify-between">
                <div className="text-2xl text-gray">Personal Info</div>
                <div className="text-2xl text-gray">Billing Info</div>
                <div className="text-2xl text-yellow">Confirm Payment</div>

            </div>
            <div className="progress h-8">
                <hr className="lining" /> <div className=" indicator-1 bg-yellow" ></div>
            </div>

            <div className="flex flex-col">
                <div className="my-8  card min-w-full ">

                    <div class="container pb-8 max-w-58 card min-h-86 mx-auto ">
                        <p className="bg-blue py-4 px-16 text-white card-header" ><span>Item Name</span><span>₦ Price</span></p>
                        <p className=" py-4 mt-4 px-16 text-gray card-amount" ><span>Data Science and Usability</span><span>50,000.00</span></p>
                        <p className=" py-4 px-16 text-gray card-amount" ><span>Shipping</span><span>0.00</span></p>
                        <p className=" py-4 px-16 text-graye line"><hr /></p>
                        <p className=" py-4  px-16 text-gray card-amount  " ><div className="total border"><span>Total</span><span>50,000.00</span></div></p>

                    </div>

                </div>

                <div className="flex flex-row justify-start">
                    <div className="my-8 mr-3 w-32 ">
                        <button onClick={() => history.push("/purchase-completed")} className=" w-32 custom-button">Pay</button>
                    </div>

                    <div className="my-8 w-32 ml-8 ">
                        <button className=" w-32 cancel-button text-purple">Cancel Payment</button>
                    </div>
                </div>







            </div>
        </div>
    </div>)

}
