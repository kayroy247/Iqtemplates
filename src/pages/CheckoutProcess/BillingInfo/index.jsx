import './BillingInfo.css'
import { useHistory } from 'react-router-dom'

export default () => {
    const history = useHistory();


    return (<div >
        <p className="text-4xl mb-6 text-purple font-bold">Complete your Purchase</p>

        <div>
            <div className="flex flex-row justify-between">
                <div className="text-2xl text-gray">Personal Info</div>
                <div className="text-2xl text-yellow">Billing Info</div>
                <div className="text-2xl text-gray">Confirm Payment</div>

            </div>
            <div className="progress h-8">
                <hr className="lining" /> <div className=" indicator bg-yellow" ></div>
            </div>

            <div className="flex flex-col">
                <div className="my-8  min-w-full ">
                    <label htmlFor="name" className="text-black  font-bold">Name On Card<span className="text-red">*</span></label>
                    <input name="name" class="mt-5 min-w-full border border-borderblue placeholder-phcolor  ..." placeholder="Opara Linus Ahmed" />
                </div>

                <div className="my-8  min-w-full ">
                    <label htmlFor="card" className="text-black  font-bold">Card Type<span className="text-red">*</span></label>
                    <input name="card" class="mt-5 min-w-full border border-borderblue placeholder-phcolor  ..." placeholder="OparaLinusAhmed@devmail.com" />
                </div>




                <div className="flex my-4 flex-row justify-between flow-wrap ">
                    <div className=" self-auto">
                        <label htmlFor="details" className="text-black  font-bold">Card Details</label>
                        <input name="details" class="   border border-borderblue placeholder-phcolor  ..." placeholder={`3425 7823 3898 3893`} />
                    </div>

                    <span className="self-auto ">
                        <label htmlFor="date" className="text-black mr-2 font-bold">Expiry Date</label>
                        <input name="date" class="   border border-borderblue placeholder-phcolor  ..." placeholder="04/23" />
                    </span>

                    <span className="  self-auto  ">
                        <label htmlFor="cvv" className="text-black  font-bold">CVV</label>
                        <input name="cvv" class="  border border-borderblue placeholder-phcolor  ..." placeholder="923" />
                    </span>
                </div>

                <div className="flex flex-row justify-start">
                    <div className="my-8 mr-3 w-32 ">
                        <button onClick={() => history.push("/confirm-payment")} className=" w-32 custom-button">Next</button>
                    </div>

                    <div className="my-8 w-32 ml-8 ">
                        <button className=" w-32 cancel-button text-purple">Cancel Payment</button>
                    </div>
                </div>







            </div>
        </div>
    </div>)

}
