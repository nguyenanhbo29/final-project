import { Badge, Button, Card, Divider } from "@mantine/core";
import Answer from "./Answer";

export default function QuestionCard() {
  return (
    <>
      <Card padding="lg" radius="md" withBorder>
        <h3>Câu 1</h3>
        <div className="flex gap-2 pt-2">
          <Badge variant="outline" color="black">
            Grammar
          </Badge>
          <Badge color="green">Dễ</Badge>
        </div>
        <div className="mt-4">
          <h3 className="text-lge">What is the past tense of 'go'</h3>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <Answer />
          <Answer />
          <Answer />
          <Answer />
        </div>
        <div className="py-4">
          <Divider />
        </div>
        <div className="flex justify-between">
          <Button variant="outline">Câu trước</Button>
          <Button>Câu tiếp theo</Button>
        </div>
      </Card>
    </>
  );
}
