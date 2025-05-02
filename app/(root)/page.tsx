import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "../Components/InterviewCard";
import {
  getCurrentUser,
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/auth.action";

const page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id!})
  ])

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasLatestInterviews = latestInterviews?.length! > 0;
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get interview ready with AI-powered practice and feedback</h2>
          <p className="text-lg">
            Practice on real interview questions and get instant feedback
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start practicing</Link>
          </Button>
        </div>

        {/* TBD - CHANGE */}
        <Image
          src="/robot.png"
          alt="Robo dude"
          width={400}
          height={400}
          className="max-lg:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your interviews</h2>
        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews!.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>You have no interviews yet.</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an interview</h2>
        <div className="interviews-section">
         
          {
          hasLatestInterviews ?
          latestInterviews!.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))
        :
        <p>There are no interviews available</p> 
        }
        </div>
      </section>
    </>
  );
};

export default page;
