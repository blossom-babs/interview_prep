import React from 'react'
import Image from 'next/image';
import { getRandomInterviewCover } from '@/app/utils';
import { getInterviewById } from '@/lib/actions/general.action'
import { redirect } from 'next/navigation';
import DisplayTechIcons from '@/app/Components/DisplayTechIcons';
import Agent from '@/app/Components/Agent';
import { getCurrentUser } from '@/lib/actions/auth.action';


const page = async ({params}: RouteParams) => {
    const {id} = await params
    const interview = await getInterviewById(id);
    const user = await getCurrentUser()

    if(!interview) redirect('/')

  return (
    <>
    <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
<div className="flex flex-row gap-4 items-center">
    <Image src={getRandomInterviewCover()} alt="cover image" width={40} height={40} className='rounded-full object-cover size-[40px]'/>
    <h3 className='capitalize'>{interview.role}</h3>
</div>
<DisplayTechIcons techStack={interview.techstack}/>
        </div>
        <p className='bg-200 px-4 py-2 rounded-lg h-fit capitalize'>{interview.type}</p>
    </div>

    <Agent userName={user?.name!} interviewId={id} type='interview' userId={user?.id} questions={interview.questions}/>
    </>
  )
}

export default page