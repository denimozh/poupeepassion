import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignUpValidation } from "@/lib/validation"
import { z } from "zod"
import LightLogo from "@/components/shared/LightLogo"
import Loader from "@/components/shared/Loader"
import { Link } from "react-router-dom"
import { createUserAccount } from "@/lib/appwrite/api"
import { useToast } from "@/components/ui/use-toast"

const SignUpForm = () => {
  const toast = useToast();
  const isLoading = false;

  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof SignUpValidation>) {
    const newUser = await createUserAccount(values);

    if(!newUser){
      return toast({title: "Sign Up Failed. Please try again.",});
    }

    // const session = await signInAccount()
  }

  return (
    <Form {...form}>
      <div className="sm:w-[420px] flex flex-center flex-col items-center">
        <LightLogo/>
        <h2 className="text-4xl pt-5 md:pt-10">Create a new account</h2>
        <p className="text-slate-400 mt-10 sm:mt-5">To use Poupee Passion enter your account details</p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col gap-3 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            {isLoading? (
              <div className="flex flex-row gap-2 items-center">
                <Loader/> <p>Loading...</p>
              </div>
            ): "Sign Up"}
          </Button>
          <p className="text-lg text-slate-400 text-center mt-2">
            Already have an account? <Link to={"/sign-in"} className="text-orange-400">Log in</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SignUpForm