import { Card } from "@mantine/core";
import clsx from "clsx";

export default function Answer({ answer, selected, onClick }) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      onClick={onClick}
      className={clsx(
        "cursor-pointer transition-all hover:bg-gray-50",
        selected ? "border-blue-500 bg-blue-50" : ""
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={clsx(
            "flex justify-center items-center w-6 h-6 rounded-full border text-sm font-bold",
            selected
              ? "bg-blue-500 text-white border-blue-500"
              : "border-gray-500 text-gray-700"
          )}
        >
          {answer.id}
        </div>
        <p>{answer.text}</p>
      </div>
    </Card>
  );
}
