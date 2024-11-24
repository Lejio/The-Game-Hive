import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
  
export default function Login() {
  return (
    <AlertDialog>
    <AlertDialogTrigger asChild>
        <Button>Login</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
        <AlertDialogHeader>
        <AlertDialogTitle>Log in or Sign up with Google</AlertDialogTitle>
        <AlertDialogDescription>
            <Button className=' w-72'>Log in with Google</Button>
        </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>
    )
}
