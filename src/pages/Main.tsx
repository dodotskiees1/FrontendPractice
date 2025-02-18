import React from 'react';
import Button from '../components/button';
import CardImages from '../components/cardwithimage';
import Card from '../components/card';

const Main = () => {
    return (
        <div>
            <div className='flex w-full'>
                <nav className='mt-[20px] flex justify-between ml-20 w-full '>
                    <p className='font-bold font-sans'>Bruno Simmons</p>
                    <p className='pl-[53%] font-sans'>Works</p>
                    <p className='font-sans'>Services</p>
                    <p className='font-sans'>About</p>
                    <div className='mr-[10%]'>

                        <Button size='sm' text='CONTACT' />
                    </div>
                </nav>
            </div>
            <div className='flex justify-center font-sans mt-[10%] font-semibold'>
                <p> Hey There, Im Bruno Simmons</p>

            </div>
            <div className=' flex justify-center font-sans mt-[2%] font-extrabold text-8xl  mx-auto'>
                <p className='text-center'>Building digital products, <br /> brands and experience</p>
            </div>

            <div className='px-[45%] py-[3%]'>
                <Button size='lg' text='CONNECT WITH ME' />
                <button />
            </div>
            <div className='border-b-2 pt-[14%]'>
            </div>
            <div className='mt-[5%] ml-20'>

                <div className=' font-bold font-sans text-4xl mb-10'>
                    <p className='leading-relaxed'>The Works I do, <br />and business I help.</p>
                </div>
                <div className='flex'>
                    <div>

                        <CardImages
                            size="large"
                            text=""
                            image="4.png"
                        />
                        <div className='mt-10 font-sans'>

                            <p className='text-2xl font-bold'>Ice Cream App Concept</p>
                            <p className='text-xl mt-3'>Palit namo sa akong ice lamion na barato pa dili mo mag <br /> mahay maka kaon ani kay mo gwapo og mo gwapa <br /> mo busa palit na</p>

                            <div className='mt-10'>
                                <Button size='lg' text='VISIT MY DRIBBLE' />

                            </div>

                        </div>
                    </div>
                    <div className='ml-[7%] mt-[7%]'>

                        <CardImages size='large' text='' image='1.png' />
                        <div className='mt-10 font-sans'>

                            <p className='text-2xl font-bold'>
                                Plant Store App
                            </p>
                            <p className='text-xl mt-3'>
                                Palit namo sa akong bulak kani na bulak maka ibog sa <br /> mga chismosa ninyo na silingan kung mangayo sila labayi <br /> og flower pot kay mga mahal ni na mga bulak kay importe <br />d from planet nimik
                            </p>
                        </div>
                    </div>
                    <div className='ml-[7%]'>
                        <CardImages size='large' text='' image='2.png' />
                        <div className='mt-10 font-sans'>
                            <p className='text-2xl font-bold'>
                                Nike App Redesign
                            </p>
                            <p className='text-xl mt-3'>
                                Sapatos for sale super ganda ni na sapatas rain of shine dili ka mag mahal 10 year warranty open for reseller pm me all my social media account
                            </p>
                        </div>
                    </div>

                </div>



            </div>

                    <div className='flex mt-[5%] pl-[5%] '>
                      <CardImages size='medium' text='' />
                        <div className=''>

                      <Card text=''/>
                        </div>
                    </div>

        </div>
    )
}

export default Main
