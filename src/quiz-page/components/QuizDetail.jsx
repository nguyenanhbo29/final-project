import { Badge, Card, Slider } from "@mantine/core";
import CountdownTimer from "../../components/CountdownTimer";
import QuestionCard from "./QuestionCard";

export default function QuizDetail() {
  return (
    <div className="bg-blue-50 h-screen">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-xl">Bài thi cơ bản</h3>
            <Badge>Câu 1/3</Badge>
          </div>
          <div>
            <CountdownTimer initialSeconds={10000} />
          </div>
        </div>
        <div className="pt-4">
          <Slider color="blue" defaultValue={40} />
        </div>
      </Card>
      <div className="mt-12 px-8">
        <QuestionCard />
      </div>
      <div className="mt-12 px-8">
        <Card>
          <h3 className="text-lg font-bold">Điều hướng câu hỏi</h3>
        </Card>
      </div>
    </div>
  );
}
