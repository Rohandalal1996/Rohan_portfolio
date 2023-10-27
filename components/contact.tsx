'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref }= useSectionInView('Contact');
  

  return (
    <motion.section ref={ref} id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center' initial={{opacity:0,}} whileInView={{opacity:1,}} transition={{duration:1}} viewport={{once:true}}>
        <SectionHeading>Contact Me</SectionHeading>
    <p className='text-gray-700 -mt-3'> Please contact me directly at Mob. No. 9017173752 / {''} <a className='underline' href="mailto:rohandalal1996@gmail.com">Rohandalal1996@gmail.com </a>{''} or through this form. </p>

    <form className='mt-10 flex flex-col' action={async (formData) => {
      const { data, error } = await sendEmail(formData);
      
      if (error) {
        toast.error(error);
        return;
      }
        toast.success('Email sent Successfully!');
      }} >
    
      {/* {async (formData) => { 
      console.log('Running on client');      
      console.log(formData.get('senderEmail'));
      console.log(formData.get('message'));
      await sendEmail(formData);}} */}

        <input type="email" name='senderEmail' required maxLength={500} className='h-14 px-4 rounded-lg border' placeholder='Your E-mail' />
        <textarea required maxLength={5000} name='message' className='h-52 px-5 py-3 my-3 rounded-lg borderBlack' placeholder='Your message' />
       <SubmitBtn/>
    </form>
    </motion.section>
  )
}
