import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "./card";
import { Button } from "./button";

export function PhilCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <Card className="bg-[#B3D9FF] transform transition duration-500 hover:bg-[#4D9BFF] hover:scale-105">
        <CardHeader className="text-white">
          <CardTitle>Use Kinto</CardTitle>
        </CardHeader>
        <CardContent className="text-white">
          <p>
            On Kinto, every user is verified and every app insured, freeing users from the unacceptable exploits and
            anonymous scams that have plagued DeFi. And with greater safety comes greater freedom, as Kinto's unique
            features give you access to investment opportunities that cannot exist on other chains.
          </p>
        </CardContent>
        <CardFooter className="flex justify-start">
          <Button className="text-white border-white hover:bg-white hover:text-[#B3D9FF]" variant="ghost">
            Get Started
          </Button>
        </CardFooter>
      </Card>
      <Card className="bg-white shadow-lg transform transition duration-500 hover:bg-[#B3D9FF] hover:scale-105">
        <CardHeader>
          <CardTitle>Build on Kinto</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Developers—both independent and institutional—have been attempting to build services that combine
            traditional finance with on-chain protocols with one hand tied behind their back. The ability to do
            network-native KYC and investor accreditation checks within a fully OFAC-compliant environment makes Kinto
            the place where DeFi and traditional finance can come together at last.
          </p>
        </CardContent>
        <CardFooter className="flex justify-start">
          <Button className="border-gray-400 hover:bg-gray-200" variant="ghost">
            Read the Docs
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
