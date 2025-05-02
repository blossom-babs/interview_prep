"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
        email:  z.string().email(),
        password:  z.string().min(7)
    })
}

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter()
  const formSchema = authFormSchema(type)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    name:"",
      email: "",
      password: ""
    },
  });


  function onSubmit(values: z.infer<typeof formSchema>) {
   try {
     if(type === "sign-up"){
        console.log('sign in', values)
        toast.success('Account created successfully. Please sign in')
        router.push('/sign-in')
     } else {
        console.log('sign in', values)
        toast.success('Welcome back')
        router.push('/')
     }
   } catch (error) {
    console.log(error)
    toast.error('There was an error')
   }
  }

  const isSignin = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          {/* Image logo <Image src="/logo.svg" alt="logo" height={32}/> */}
          <h2 className="text-primary-100">Interview Prep</h2>
        </div>
        <h3>Practice Job interviews with AI</h3>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full mt-4 form">
       
         {!isSignin &&
          <FormField control={form.control} name="name" placeholder="Your name" label="Name"/>
          }
      <FormField control={form.control} name="email" label="Email" placeholder="Your email" type="email"/>
      <FormField control={form.control} name="password" label="Password" placeholder="Enter your password" type="password"/>
     

          <Button className="btn" type="submit">
            {isSignin ? 'Sign in' : 'Create an account'}
          </Button>
          </form>
        </Form>
        <p className="text-center">
            {isSignin ? 'No account yet?' : 'Have an account already?'}
        <Link href={isSignin ? '/sign-up' : '/sign-in'} className="font-bold text-user-primary ml-1"> 
        {isSignin ? "Sign up": "Sign in"}
        </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
