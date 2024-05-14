import React from "react";
import { Card, CardHeader, CardFooter, CardTitle, CardContent } from './card';
import { Button } from "./button";

export function PhilCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <Card hoverBgColor="#4D9BFF">
        <CardHeader>
          <CardTitle>Use Miyagi</CardTitle>
        </CardHeader>
        <CardContent className="opacity-0 hover:opacity-100 transition-opacity duration-500">
          <p>
            Miyagi does not keep a trace of your data. Your assets are securely stored
            decentrally, making it immune to exploitation. We forgo the notion of negativity
            in relation to data privacy and give you the reins to your assets.
          </p>
        </CardContent>
        <CardFooter className="flex justify-start">
          <Button className="border-black hover:bg-white hover:text-[#4D9BFF]" variant="ghost">
            Try Out Miyagi For Free
          </Button>
        </CardFooter>
      </Card>
      <Card hoverBgColor="#4D9BFF">
        <CardHeader>
          <CardTitle>Build on Miyagi</CardTitle>
        </CardHeader>
        <CardContent className="opacity-0 hover:opacity-100 transition-opacity duration-500">
          <p>
            Let us know how you feel about Miyagi. Your opinion matters to us. A long time ago,
            someone asked one of our founders, "What does the user want?". That simple yet
            complex question still resonates with us and remains one of the core philosophies
            of Miyagi. Your feedback adds to the landscape of Miyagi and with your help, one day
            we would find the solution to that resonating question.
          </p>
        </CardContent>
        <CardFooter className="flex justify-start">
          <Button className="border-black hover:bg-white hover:text-[#b7c0cd]" variant="ghost">
            Give Feedback
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
