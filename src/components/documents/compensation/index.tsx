import CompensationSec from "./compensationSec"
import Unions from "./unions"
import EligibleForBenefits from "./eligibleForBenefits"

const Compensation = () => {

    return (
        <>
            <div className='max-w-[1024px] px-6  w-full mx-auto  mt-[140px] mb-[71px] py-6  min-h-screen'>
                <div className='p-6 rounded-lg border border-gray-200 bg-white'>
                    <h3 className='text-lg font-semibold text-gray-900 font-inter mb-4 leading-[27px]'>Tell us about Jason Smith’s compensation & benefits</h3>
                    <p className='text-sm text-gray-900 font-inter font-medium'>Tell us how Jason Smith will be compensated, if / when they should become eligible for benefits, and let Mason guide you through - and optimize - how any union membership(s) may impact your compensation & benefit payment obligations</p>
                </div>
                <Unions />
                <CompensationSec />
                <EligibleForBenefits />
            </div>
        </>
    )
}

export default Compensation
