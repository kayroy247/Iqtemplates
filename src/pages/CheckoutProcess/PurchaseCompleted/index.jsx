import './purchaseCompleted.css'
import { useHistory } from 'react-router-dom'
import checkmark from '../../../img/checkmark.png'

export default () => {
    const history = useHistory();


    return (<div >

        <div>


            <div className="flex flex-col">
                <div className="my-8  card min-w-full ">

                    <div class="container pb-8 card min-h-86 mx-auto ">
                        <div className=" mt-8 flex flex-row justify-center">

                            <img src={checkmark} />
                        </div>
                        <p className="text-5xl pt-8 px-32 mb-2 text-purple font-bold">Purchase Completed</p>

                        <p className=" py-4 mt-4 px-32 text-gray card-amount" >Please check your email for details concerning this transaction</p>
                        <p className=" py-4  px-32 text-yellow underline return-button   " onClick={() => history.push("/profile-info")} >Return Home</p>

                    </div>

                </div>

            </div>
        </div>
    </div>)

}
