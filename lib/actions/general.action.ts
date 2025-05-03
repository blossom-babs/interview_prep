import { db } from "@/firebase/admin";

export async function getInterviewsByUserId(
    userId: string
  ): Promise<Interview[] | null> {
    const interviews = await db
      .collection("interviews")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .get();
    
      return interviews.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as Interview[]
  }
  
  export async function getLatestInterviews(
    params: GetLatestInterviewsParams
  ): Promise<Interview[] | null> {
  
    const {userId, limit=10} = params;
  
    const interviews = await db
      .collection("interviews")
      .orderBy("createdAt", "desc")
      .where("finalized", "==", true)
      .where("userId", "!=", userId)
      .limit(limit)
      .get();
    
      return interviews.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as Interview[]
  }


  export async function getInterviewById(
    interviewId: string
  ): Promise<Interview | null> {
    const interview = await db
      .collection("interviews")
      .doc(interviewId)
      .get();
    
      return interview.data() as Interview | null
  }
  
  