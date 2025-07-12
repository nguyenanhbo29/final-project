import { Card } from "@mantine/core";
import clsx from "clsx";

export default function Answer() {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="cursor-pointer hover:bg-gray-50!"
    >
      <div className="flex items-center gap-4">
        <div
          className={clsx(
            "flex justify-center items-center w-6 h-6 rounded-full border-solid border-1 border-gray-600 text-gray-600"
          )}
        >
          A
        </div>
        <p>goed</p>
      </div>
    </Card>
  );
}
