import './ProfileInfo.css'
import { useHistory } from 'react-router-dom'

export default () => {
    const history = useHistory();


    return (<div >
        <p className="text-4xl mb-6 text-purple font-bold">Complete your Purchase</p>

        <div>
            <div className="flex flex-row justify-between">
                <div className="text-2xl text-yellow">Personal Info</div>
                <div className="text-2xl text-gray">Billing Info</div>
                <div className="text-2xl text-gray">Confirm Payment</div>

            </div>
            <div className="progress h-8">
                <hr className="lining" /> <div className=" indicator-personal bg-yellow" ></div>
            </div>

            <div className="flex flex-col">
                <div className="my-8  min-w-full ">
                    <label htmlFor="name" className="text-black  font-bold">Name</label>
                    <input name="name" class="mt-5 min-w-full border border-borderblue placeholder-phcolor  ..." placeholder="Opara Linus Ahmed" />
                </div>

                <div className="my-8  min-w-full ">
                    <label htmlFor="email" className="text-black  font-bold">Email Address<span className="text-red">*</span></label>
                    <div className="text-lightblue text-xs">The purchase receipt would be sent to this address</div>
                    <input name="email" type="email" class="mt-5 min-w-full border border-borderblue placeholder-phcolor  ..." placeholder="OparaLinusAhmed@devmail.com" />
                </div>
                <div className="my-8  min-w-full ">
                    <label htmlFor="address-1" className="text-black  font-bold">Address 1</label>
                    <input name="address-1" class="mt-5 min-w-full border border-borderblue placeholder-phcolor  ..." placeholder="The address of the user goes here" />
                </div>

                <div className="my-8  min-w-full ">
                    <label htmlFor="addres-2" className="text-black  font-bold">Address 2</label>
                    <input name="address-2" class="mt-5 min-w-full border border-borderblue placeholder-phcolor  ..." placeholder="and here" />
                </div>

                <div className="flex flex-row justify-between flex-wrap">
                    <div className="my-8 w-3/5 ">
                        <label htmlFor="lga" className="text-black  font-bold">Local Government</label>
                        <input name="lga" class="mt-5 min-w-full border border-borderblue placeholder-phcolor  ..." placeholder="Surulere" />
                    </div>

                    <div className="my-8   ">
                        <label htmlFor="state" className="text-black  font-bold">State</label>
                        <input name="state" class="mt-5 min-w-full border border-borderblue placeholder-phcolor  ..." placeholder="Lagos" />
                    </div>
                </div>

                <div className="flex flex-row justify-start">
                    <div className="my-8 mr-3 w-32 ">
                        <button onClick={() => history.push("/billing-info")} className=" w-32 custom-button">Next</button>
                    </div>

                    <div className="my-8 w-32 ml-8 ">
                        <button className=" w-32 cancel-button text-purple">Cancel Payment</button>
                    </div>
                </div>







            </div>
        </div>
    </div>)

}
