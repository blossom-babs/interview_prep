import { Button } from '@/components/ui/button';
import { getCurrentUser } from '@/lib/actions/auth.action';
import { getFeedbackByInterviewId, getInterviewById } from '@/lib/actions/general.action';
import dayjs from 'dayjs';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async ({params}:RouteParams) => {
  const {id} = await params;
  const user = await getCurrentUser()
  const interview = await getInterviewById(id)

  if(!interview) redirect('/')

    const feedback = await getFeedbackByInterviewId({interviewId:id, userId:user?.id!})

   
      const formattedDate = dayjs(feedback?.createdAt).format('MMM D, YYYY h:mm A')
    
  return (
    <section className='section-feedback'>
      <div className="flex flex-row justify-center">
      <h1 className='text-4xl font-semibold'>Feedback on the Interview - <span className='capitalize'>{interview.role}</span></h1>

      </div>

      <div className="flex flex-row justify-center">
<div className="flex flex-row gap-5">

</div>
      </div>
      <p>
        Overall impression: {feedback?.totalScore}/100
        <span>{formattedDate}</span>
      </p>
      <p>{feedback?.finalAssessment}</p>
      <h2>Breakdown of Evaluation</h2>
      <ol>
      {
        feedback?.categoryScores.map((category, index) => (
<li key={category.name}>
  <div>
    {category.name} - {category.score}/100

<ul>
    {category.comment.split('\n').map((comment) => 
    <li key={comment}>{comment}</li>
    )}
</ul>
  </div>
</li>
        ))
      }
      </ol>

      <div className='buttons'>
        <Button className='btn-secondary flex-1'>
          <Link href="/" className='w-full justify-center'>
          <p className='text-sm font-semibold text-primary-200 text-center'>Back to dashboard</p>
          </Link>
        </Button>
        <Button className='btn-secondary flex-1'>
          <Link href={`/interview/${id}`} className='w-full justify-center'>
          <p className='text-sm font-semibold text-primary-200 text-center'>Retake interview</p>
          </Link>
        </Button>
        {/* <button onClick={() => redirect('/')}>Return to dashboard</button>
        <button onClick={() => redirect()}>Retake interview</button> */}
      </div>
    </section>
  )
}

export default Page