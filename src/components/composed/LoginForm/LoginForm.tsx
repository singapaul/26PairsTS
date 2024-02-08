import React from "react";
import { z } from "zod";
import {auth} from '../../Firebase/Firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, navigate } from "gatsby";
type Props = {};

// @todo will need to add the path later as I move this route???
export const LoginForm = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    formState: { isValid },
  } = form;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const { email, password } = values;
    try {
      // @ts-ignore
      await signInWithEmailAndPassword(auth, email, password);
      navigate(`/app/profile`);
    } catch (err) {
      // @ts-ignore
     console.log(err)
    }
  };

  const handleRegisterClick = () => {
    navigate("/app/register");
  };

  return (
    <>
      <div className="form-container max-w-xs">
        <h1 className="my-4 text-2xl font-bold">Log in</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email address" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
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
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={!isValid}>
              Log in
            </Button>
          </form>
        </Form>
        <Separator className="my-4" />
        <Button type="button" className="w-full" onClick={handleRegisterClick}>
          Register
        </Button>
      </div>
    </>
  );
};

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(7, {
    message: "Username must be at least 7 characters.",
  }),
});
