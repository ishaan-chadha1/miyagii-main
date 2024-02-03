/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0h2UymAAK8J
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { ResponsiveBar } from "@nivo/bar"

export default function Comparison() {
  return (
    <div key="1" className="bg-[#F3F4F6] p-8 rounded-lg max-w-4xl mx-auto shadow-lg border border-gray-200">
      <div className="text-gray-900 font-semibold mb-6 text-3xl text-center">Our Price vs. Our Competition</div>
      <div className="grid grid-cols-5 gap-4 text-gray-900 mb-6">
        <div className="col-span-1" />
        <div className="flex justify-center items-center">
          <CloudIcon className="h-10 w-10" />
        </div>
        <div className="flex justify-center items-center">
          <CloudIcon className="h-10 w-10" />
        </div>
        <div className="flex justify-center items-center">
          <CloudIcon className="h-10 w-10" />
        </div>
        <div className="flex justify-center items-center">
          <SplineIcon className="h-10 w-10" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 text-gray-900 mb-6 bg-gray-200 p-2 rounded-md">
        <div className="col-span-1 font-medium">A100 / 80 GB</div>
        <div className="flex justify-center">$5.12/hr</div>
        <div className="flex justify-center">$5.07/hr</div>
        <div className="flex justify-center">$3.67/hr</div>
        <div className="flex justify-center bg-[#2563EB] rounded-md text-white">$1.38/hr</div>
      </div>
      <div className="grid grid-cols-5 gap-4 text-gray-900 mb-6 bg-gray-200 p-2 rounded-md">
        <div className="col-span-1 font-medium">A100 / 40 GB</div>
        <div className="flex justify-center">$4.10/hr</div>
        <div className="flex justify-center">$3.67/hr</div>
        <div className="flex justify-center">$3.40/hr</div>
        <div className="flex justify-center bg-[#2563EB] rounded-md text-white">$0.69/hr</div>
      </div>
      <div className="grid grid-cols-5 gap-4 text-gray-900 mb-6 bg-gray-200 p-2 rounded-md">
        <div className="col-span-1 font-medium">V100 / 16 GB</div>
        <div className="flex justify-center">$3.06/hr</div>
        <div className="flex justify-center">$2.95/hr</div>
        <div className="flex justify-center">$3.06/hr</div>
        <div className="flex justify-center bg-[#2563EB] rounded-md text-white">$0.14/hr</div>
      </div>
      <BarChart className="w-full h-[300px]" />
    </div>
  )
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function SplineIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <path d="M5 17A12 12 0 0 1 17 5" />
    </svg>
  )
}
