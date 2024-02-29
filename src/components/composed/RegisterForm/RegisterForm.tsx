import React from "react";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { navigate } from "gatsby";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";

import { auth } from "../../Firebase/Firebase";
type Props = {};

export const RegisterForm = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
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
      await createUserWithEmailAndPassword(auth, email, password);
      navigate(`/app/profile`);
    } catch (err) {
      // @ts-ignore
      console.log(err);
    }
  };

  const handleRegisterClick = () => {
    navigate("/app/login");
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // @ts-ignore
      await signInWithPopup(auth, provider);
      navigate(`/app/profile`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="form-container max-w-xs">
        <h1 className="my-4 text-2xl font-bold">Register</h1>
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="confirm password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={!isValid}>
              Register
            </Button>
            <Button
              type="button"
              className="w-full"
              onClick={handleGoogleSignIn}
            >
              Login in with Google
            </Button>
          </form>
        </Form>
        <Separator className="my-4" />
        <Button type="button" className="w-full" onClick={handleRegisterClick}>
          Log in
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
    message: "Password must be at least 7 characters.",
  }),
  confirmPassword: z.string().min(7, {
    message: "Password must be at least 7 characters.",
  }),
});
