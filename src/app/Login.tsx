'use client'
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client";
import { type User } from "@supabase/supabase-js"

async function signInWithGoogle() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/api/auth/callback",
    },
  });
  console.log(data, error);
}

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data, error } = await supabase.auth.getUser();
      setUser(data.user);
    }
    getUser();
  }, [])

  async function signOut() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Sign out error", error.message);
    window.location.reload();
  }

  console.log(user);

  return (
    <div className="flex items-center justify-center">
      {/* Button to Open Modal */}
      <Button
        onClick={user? signOut : openModal}
      >
        {user? "Sign Out" : "Login"}
      </Button>

      {/* Modal with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed z-50 inset-0 bg-black/50 flex items-center justify-center"
            onClick={closeModal} // Close modal on click outside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 w-96 max-w-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <h2 className="text-xl font-semibold">Log in or Sign up with Google</h2>
              <p className=" text-sm text-center">
                Join today for free. Get access to custom recommendations and share your thoughts with the community!
              </p>
              <Button onClick={signInWithGoogle} className=" w-72"><FaGoogle size={20} />Google</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
