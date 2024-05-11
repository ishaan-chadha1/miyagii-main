import { ResponsiveBar } from "@nivo/bar";

export default function Comparison() {
  return (
    <div
      style={{ fontFamily: "Cabin,sans-serif"}}
      key="1"
      className="bg-transparent p-4 rounded-lg max-w-3xl mx-auto shadow-lg border border-gray-200"
    >
      <div className="text-gray-900 font-semibold mb-4 text-xl">
        {"<"}
        <span className="text-[#5379FE]">MIYAGI</span>
        {">"}'s Pricing Vs. Our Competitors
      </div>
      <div className="grid grid-cols-5 gap-2 text-gray-900 mb-4">
        <div className="col-span-1" />
        <div className="flex justify-center items-center">
          <CloudIcon className="h-4 w-4" /><a>AWS</a>
        </div>
        <div className="flex justify-center items-center">
          <CloudIcon className="h-4 w-4" /><a>Cloud</a>
        </div>
        <div className="flex justify-center items-center">
          <CloudIcon className="h-4 w-4" /><a>Web3</a>
        </div>
        <div className="flex justify-center items-center">
          <SplineIcon className="h-4 w-4" /><a>Miyagi</a>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 text-gray-900 mb-4">
        <div className="col-span-1 font-medium text-sm">A100 / 80 GB</div>
        <div className="flex justify-center text-sm">$5.12/hr</div>
        <div className="flex justify-center text-sm">$5.07/hr</div>
        <div className="flex justify-center text-sm">$3.67/hr</div>
        <div className="flex justify-center bg-[#5379FE] rounded-md text-white text-sm">
          $1.38/hr
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 text-gray-900 mb-4">
        <div className="col-span-1 font-medium text-sm">A100 / 40 GB</div>
        <div className="flex justify-center text-sm">$4.10/hr</div>
        <div className="flex justify-center text-sm">$3.67/hr</div>
        <div className="flex justify-center text-sm">$3.40/hr</div>
        <div className="flex justify-center bg-[#5379FE] rounded-md text-white text-sm">
          $0.69/hr
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 text-gray-900 mb-4">
        <div className="col-span-1 font-medium text-sm">V100 / 16 GB</div>
        <div className="flex justify-center text-sm">$3.06/hr</div>
        <div className="flex justify-center text-sm">$2.95/hr</div>
        <div className="flex justify-center text-sm">$3.06/hr</div>
        <div className="flex justify-center bg-[#5379FE] rounded-md text-white text-sm">
          $0.14/hr
        </div>
      </div>
      <BarChart className="w-full pt-10 h-[250px]" />
    </div>
  );
}

function BarChart() {
  const data = [
    { name: "AWS", count: 111 },
    { name: "Google Cloud", count: 157 },
    { name: "Azure", count: 129 },
    { name: "OneDrive", count: 150 },
    { name: "DropBox", count: 119 },
    { name: "Miyagi", count: 72 },
  ];

  return (
    <div style={{ height: '250px' }}>
      <ResponsiveBar
        data={data}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
        padding={0.3}
        colors={bar => bar.data.name === "Miyagi" ? "#5379FE" : "#ccc"}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        theme={{
          fontFamily: 'Cabin, sans-serif', // Change this to your website's global font if different
          fontSize: 12,
          tooltip: {
            container: {
              background: '#ffffff',
              color: '#333333',
              fontSize: '12px',
              borderRadius: '4px',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
              padding: '5px'
            }
          },
          grid: {
            line: {
              stroke: "#e0e0e0",
              strokeWidth: 1
            },
          },
        }}
        tooltip={({ id, value, color }) => (
          <strong style={{ color }}>
            {id}: ${value}
          </strong>
        )}
        role="application"
        ariaLabel="Bar Chart showing pricing data"
      />
    </div>
  );
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
  );
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
  );
}
