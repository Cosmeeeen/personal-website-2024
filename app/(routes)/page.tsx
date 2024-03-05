import Image from "next/image";

import Header from "@/components/Header";
import profileImage from "@/app/_assets/images/profilePicture.webp";
import { Separator } from "@/components/ui/separator";
import TicTacToe from "@/components/TicTacToe";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="m-5 w-full lg:mx-0 lg:w-1/2">
        <Header />
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          <Image
            src={profileImage}
            alt="A photo of me"
            width={256}
            height={256}
            className="h-fit w-fit rounded-full"
          />
          <div>
            <h1 className="mb-3 text-3xl font-semibold lg:text-4xl">
              Quick Introduction
            </h1>
            <Separator />
            <p className="mt-6 text-base lg:text-lg">
              I&apos;m a frontend engineer with a passion for web development. I
              love to create beautiful and user-friendly interfaces. I&apos;m
              always eager to learn new technologies and improve my skills,
              staying up to date with the latest trends in the industry, while
              also deepening my knowledge in industry standards and best
              practices.
            </p>
            <p className="mt-3 text-base font-thin italic lg:text-lg">
              I don&apos;t really have any good pictures of myself, but I&apos;m
              working on it.
            </p>
          </div>
        </div>
        <div className="my-8 flex items-center justify-center">
          <Card className="w-fit">
            <CardHeader>
              <CardTitle>Tic Tac Toe</CardTitle>
              <CardDescription>
                This page was kinda empty, so here&apos;s a random game of Tic
                Tac Toe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TicTacToe />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
