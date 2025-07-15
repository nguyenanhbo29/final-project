import { Button, Card } from "@mantine/core";
import { IconClock, IconFileText, IconListDetails } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function CardExam({ exam }) {
  const navigate = useNavigate();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <div className="relative">
        <div className="absolute top-0 right-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
          <IconFileText size={20} color="white" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1">{exam.title}</h3>
        <p className="text-gray-600 mb-4">{exam.description}</p>

        <div className="flex gap-6 text-sm text-gray-700 mb-2">
          <div className="flex items-center gap-2">
            <IconListDetails size={16} />
            <span>{exam.questionsCount} câu hỏi</span>
          </div>
          <div className="flex items-center gap-2">
            <IconClock size={16} />
            <span>{exam.duration} phút</span>
          </div>
        </div>

        <div className="flex gap-2 mb-3">
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              exam.level === "Dễ"
                ? "bg-green-100 text-green-700"
                : exam.level === "Trung bình"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {exam.level}
          </span>
        </div>

        <div className="flex gap-2 flex-wrap mb-5">
          {exam.topics.map((topic, index) => (
            <span
              key={index}
              className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded-lg"
            >
              {topic}
            </span>
          ))}
        </div>

        <Button
          fullWidth
          radius="md"
          onClick={() => {
            navigate(`/quiz/${exam.id}`);
          }}
          className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:opacity-90 text-white font-semibold"
        >
          Chọn đề thi này
        </Button>
      </div>
    </Card>
  );
}
