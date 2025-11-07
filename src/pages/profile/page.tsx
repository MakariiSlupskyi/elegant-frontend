import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { User } from "@/types/types";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const [userData, setUserData] = useState<User>({
      name: "Makarii Slupskyi",
      email: "example@gmail.com",
      github_url: "https://github.com/hello",
      linkedin_url: "https://linkedin.com/hello",
      bio: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return <div className="flex flex-col items-center h-screen">
    <NavBar page="Profile" />

    <div className="flex flex-col items-start w-[70vw] h-full my-20">
      <p className="font-bold text-lg mb-6">Your Profile</p>

      <div className="flex h-full w-full">
        <div className="flex flex-col justify-between h-full w-[25vw] mr-20">
          <div>
            <p className="font-bold mb-2">Name:</p>
            <Input className="mb-4" placeholder="Type CV title..." name="name" value={userData.name} onChange={e => handleChange(e)} />
            
            <p className="font-bold mb-2">Email:</p>
            <Input className="mb-4" placeholder="Type CV position..." name="email" value={userData.email} onChange={e => handleChange(e)} />
                  
            <p className="font-bold mb-2">Name:</p>
            <Input className="mb-4" placeholder="Type CV title..." name="github_url" value={userData.github_url} onChange={e => handleChange(e)} />
            
            <p className="font-bold mb-2">Email:</p>
            <Input className="mb-4" placeholder="Type CV position..." name="linkedin_url" value={userData.linkedin_url} onChange={e => handleChange(e)} />
              
            <p className="font-bold mb-2">Bio:</p>
            <Textarea className="mb-6" placeholder="Type your skills..." name="bio" value={userData.bio} onChange={e => handleChange(e)} />
          </div>
          <Link to={"/dashboard"}>
            <Button className="self-start">Go back</Button>
          </Link>
        </div>

        <div className="h-full w-full bg-accent"></div>
      </div>
    </div>
  </div>
}