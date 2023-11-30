const DonationInfo = (props) => {
    return(
        <div className=" w-[100vw]">
            <div className="w-full border-[2px] border-grey px-[30px] bg-white py-[15px] flex items-center justify-between">
                <div className="flex items-center space-x-3 hover:cursor-pointer">
                    <img src="/assets/logo2.png" alt="logo" className="w-[45px] h-[45px]" />
                    <p className="text-[32px] font-medium">Organ Mask</p>
                </div>
            </div>
            <div className="w-full flex flex-col mt-[20px] px-[40px]">
                <p className="text-[28px]">How does the donation process work?</p>
                <p className="mt-[20px]">Since you have reached here, you must already have registered as a donor on Organ Mask. Let's get you acquainted with what's happening on the backend behind the scenes after your registration.</p>
                <p className="mt-[10px] font-medium text-[20px] px-[10px] py-[5px] rounded-[5px] bg-[#e9ecef]">Registration</p>
                <li className="mt-[10px]">The step that you have completed is the very first, but a very crucial phase of the process. After you registered, you would have received a Secret Token on your provided email address. As already instructed, you must not give this secret token to anyone else other than the hospital authorities on the day of organ donation process.</li>   
                <li>After you registered, all of your details were stored and sent to the hospital for the further processes and you are provided a secret token that will act as your password for the actual donation.</li>
                <li>You have the autonomy to use your email address and created password to login to you profile and check the status of your donation. But rest assured, as we will send you an email reagarding any updates that follow your registration.</li>
                <p className="mt-[20px] font-medium text-[20px] px-[10px] py-[5px] rounded-[5px] bg-[#e9ecef]">Verification</p>
                <li className="mt-[10px]">The medical experts at the hospital will check your uploaded medical history records and your identification and check if you are viable for the organ donation that you have registered for. The hospital could give you a call in case they need some other medical information regarding your donation.</li>
                <li>We strongly advice you to not share your secret token with anyone over a phone call or any other communication medium until you have reached to the hospital for the actual donation.</li>
                <li>Once your verification is completed, we will notify you via mail, or you can check your status bu loging in with your email address and password that you created while registration.</li>
                <p className="mt-[20px] font-medium text-[20px] px-[10px] py-[5px] rounded-[5px] bg-[#e9ecef]">Donation</p>
                <li className="mt-[10px]">Once your credentials and medical verification is completed, your status is set to "Verified" and your registration is open for donation.</li>
                <li>Now you can select a suitable time for your donation and when you go to the hospital for donation procedure, the hospital will require your secret token that you received while registration.</li>
                <li>As soon as you provide them with your secret token, the donation will be marked and it's signature will be stored on blockchain where it will be completely secure.</li>
            </div>
        </div>
    );
}


export default DonationInfo