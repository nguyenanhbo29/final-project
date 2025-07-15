import { Badge, Button, Card, Divider } from "@mantine/core";
import Answer from "./Answer";

export default function QuestionCard({
  data,
  onPrev,
  onNext,
  questionIndex,
  isLast,
  selectedAnswer,
  onSelect,
}) {
  return (
    <Card padding="lg" radius="md" withBorder>
      <h3 className="font-semibold text-lg">Câu {questionIndex + 1}</h3>

      <div className="flex gap-2 pt-2">
        <Badge variant="outline" color="black">
          {data.topic}
        </Badge>
        <Badge color="green">{data.level}</Badge>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium">{data.content}</h3>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {data.options.map((option) => (
          <Answer
            key={option.id}
            answer={option}
            selected={selectedAnswer === option.id}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>

      <div className="py-4">
        <Divider />
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Câu trước
        </Button>
        <Button onClick={onNext}>{isLast ? "Nộp bài" : "Câu tiếp theo"}</Button>
      </div>
    </Card>
  );
}
