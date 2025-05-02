import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "../Components/InterviewCard";

const page = () => {
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
        <Image src="/robot.png" alt="Robo dude" width={400} height={400} className="max-lg:hidden"/>
      </section>

      <section className="flex flex-col gap-6 mt-8">
<h2>Your interviews</h2>
<div className="interviews-section">
  {/* <p>No interviews yet.</p> */}
  {dummyInterviews.map((interview) => (
    <InterviewCard {...interview} key={interview.id}/>
  ))}
</div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
<h2>Take an interview</h2>
<div className="interviews-section">
  {/* <p>There are no interviews available</p> */}
  {dummyInterviews.map((interview) => (
    <InterviewCard {...interview} key={interview.id}/>
  ))}
</div>
      </section>
    </>
  );
};

export default page;
