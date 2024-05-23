import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignUpValidation } from "@/lib/validation"
import { z } from "zod"
import LightLogo from "@/components/shared/LightLogo"

const SignUpForm = () => {
  const isLoading = true;

  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof SignUpValidation>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <div className="sm:w-[420px] flex flex-center flex-col items-center">
        <LightLogo/>
        <h2 className="text-4xl pt-5 md:pt-10">Create a new account</h2>
        <p className="text-slate-400 sm:mt-5">To use Poupee Passion enter your account details</p>
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
              <div className="flex-center gap-2">
                Loading...
              </div>
            ): "Sign Up"}
          </Button>
        </form>
      </div>
    </Form>
  )
}

export default SignUpForm