import { ChartContainer, BarPlot, LineChart, PieChart } from "@mui/x-charts";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G"
];
const pieParams = { height: 400, width: 400 };
const palette = ["red", "blue", "green"];
const Report = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-4">
        <Card className="mt-2 mb-2 p-4">
          <CardBody className="flex justify-between gap-2 flex-row">
            <Card>
              <CardHeader>Top 5 Dishes</CardHeader>
              <CardBody>
                <ChartContainer
                  width={500}
                  height={300}
                  series={[
                    { data: uData, label: "uv", type: "bar", color: "#4fbe42" }
                  ]}
                  xAxis={[
                    {
                      scaleType: "band",
                      data: xLabels
                    }
                  ]}
                >
                  <BarPlot />
                </ChartContainer>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Top 5 Restuarant</CardHeader>
              <CardBody>
                <ChartContainer
                  width={500}
                  height={300}
                  series={[
                    {
                      data: uData,
                      label: "uv",
                      type: "bar",
                      color: "steelblue"
                    }
                  ]}
                  xAxis={[
                    {
                      scaleType: "band",
                      data: xLabels
                    }
                  ]}
                >
                  <BarPlot />
                </ChartContainer>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
        <Card className="mt-2 mb-2 p-4">
          <CardBody className="flex justify-between gap-2 flex-row">
            <Card style={{ width: "50%" }}>
              <CardHeader>Profile</CardHeader>
              <CardBody>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5]
                    }
                  ]}
                  width={500}
                  height={300}
                />
              </CardBody>
            </Card>
            <Card style={{ width: "50%" }}>
              <CardHeader>Ratings</CardHeader>
              <CardBody className="flex justify-center items-center">
                <PieChart
                  colors={palette}
                  series={[
                    { data: [{ value: 10 }, { value: 15 }, { value: 20 }] }
                  ]}
                  {...pieParams}
                />
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Report;
