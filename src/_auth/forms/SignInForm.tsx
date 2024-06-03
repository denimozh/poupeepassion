import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignInValidation } from "@/lib/validation"
import { z } from "zod"
import LightLogo from "@/components/shared/LightLogo"
import Loader from "@/components/shared/Loader"
import { Link, useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
import { useSignInAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"

const SignInForm = () => {
  const { toast } = useToast();

  const {checkAuthUser, isLoading: isUserLoading } = useUserContext();

  const navigate = useNavigate();

  const {mutateAsync: signInAccount } = useSignInAccount();

  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  
  async function onSubmit(values: z.infer<typeof SignInValidation>) {

    const session = await signInAccount({email: values.email, password: values.password})

    if(!session){
      return toast({title: "Sign In Failed. Please try again."});
      navigate("/sign-in");
    }

    const isLoggedIn = await checkAuthUser();

    if(isLoggedIn){
      form.reset();
      navigate('/')
    } else {
      return toast({ title: 'Sign Up Failed. Please try again.'});
    }
  }

  return (
    <Form {...form}>
      <div className="sm:w-[420px] flex flex-center flex-col items-center">
        <LightLogo/>
        <h2 className="text-4xl pt-5 md:pt-10">Log In to your account</h2>
        <p className="text-slate-400 mt-10 sm:mt-5">Welcome Back! - Please enter your details</p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col gap-3 w-full mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="h-12">
            {isUserLoading? (
              <div className="flex flex-row gap-2 items-center">
                <Loader/> <p>Loading...</p>
              </div>
            ): "Sign In"}
          </Button>
          <p className="text-lg text-slate-400 text-center mt-2">
            Don't have an account? <Link to={"/sign-up"} className="text-orange-400">Sign Up</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SignInForm