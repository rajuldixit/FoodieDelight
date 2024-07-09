import { Card, Skeleton } from "@nextui-org/react";

const Skeleton_Card = () => {
  return (
    <Card className="w-[200px] space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-16 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3 mt-2">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-9 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg mt-2">
          <div className="h-8 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg mt-2">
          <div className="h-7 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
};

export default Skeleton_Card;
