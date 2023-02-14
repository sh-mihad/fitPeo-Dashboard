import React from 'react';
import ProfileChart from '../../Charts/ProfileChart';
import Activity from '../Activity/Activity';


const UserProfile = () => {
    return (
        <section className='flex flex-col bg-white w-full drop-shadow-lg rounded-lg'>

            {/* Profile Piicture and cover image */}
            <div className='h-28  bg-blue-600 w-full rounded-t-lg'></div>
            <div className='bg-white drop-shadow-lg -mt-12 self-center rounded-full'>
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" className='h-28 rounded-full p-1' alt="" />
            </div>

            <div className=' mx-3'> 

                {/*------- Profile data---------- */}
                <h1 className='text-lg text-center'>Noyon De</h1>
                <p className='text-sm text-center'>Product Designer</p>
                <div className="flex w-full my-3">
                    <div className="grid flex-grow card rounded-box place-items-center">
                        <h3 className='text-lg font-semibold'>1,269</h3>
                        <p className='text-sm'>Products</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid flex-grow card rounded-box place-items-center">
                        <h3 className='text-lg font-semibold'>5.2k</h3>
                        <p className='text-sm'>Followers</p>

                    </div>
                </div>
                <div className="divider mb-0"></div>


                {/* ---------Progress bar and Earning Div*----*/}                
                <div className='text-center my-4 mx-5'>
                    <p className='my-5 text-start text-lg font-semibold'>Earning</p>

                    <p className='text-xl font-semibold my-2'>76%</p>
                    <progress className="progress progress-info w-56" value="70" max="100"></progress>

                    <p className='text-xl font-semibold mt-3'>$26,256</p>
                    <p className='text-sm text-gray-400 my-2'>Earning this Month</p>

                    <div className='flex gap-3 text-center items-center justify-center my-5'>
                        <p className={`text-xs p-1 font-light text-gray-500 bg-green-200  rounded-lg `}>+ 2.65%</p>
                        <p className='text-sm text-gray-400 my-2 text-start'>From previous period</p>
                    </div>
                    <div className="divider mb-0"></div>
                </div>


                 {/* ---------Recent Activity Data----*/}  
                <div className='text-center my-4 mx-5'>
                <p className='my-5 text-start text-lg font-semibold'>Recent Activity</p>
                <Activity date={12} month={"Sept"} data={`Responded to need “Volunteer Activities"`}/>
                <Activity date={13} month={"Sept"} data={`Everyone realizes would be desirable"`}/>
                <Activity date={14} month={"Sept"} data={`Joined the group “Boardsmanship Forum”"`}/>
                <Activity date={14} month={"Sept"} data={`Joined the group “Boardsmanship Forum”"`}/>
              
                </div>

            </div>


        </section>
    );
};

export default UserProfile;