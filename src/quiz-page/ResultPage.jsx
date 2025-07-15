import { useLocation, useNavigate } from "react-router-dom";
import { Badge, Button, Card } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { exam, questions, answers } = location.state || {};

  if (!exam || !questions || !answers) {
    return <div className="text-center mt-10 text-lg">Không có dữ liệu</div>;
  }

  const totalCorrect = questions.reduce((sum, q) => {
    const selected = answers[q.id];
    return selected === q.correctAnswer ? sum + 1 : sum;
  }, 0);

  const percent = Math.round((totalCorrect / questions.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Bài thi hoàn thành</h1>
        <p className="text-gray-600 text-lg">
          Kết quả của đề thi "<strong>{exam.title}</strong>"
        </p>
        <div className="text-red-500 text-5xl font-bold mt-4">{percent}%</div>
        <p className="text-gray-600">
          {totalCorrect}/{questions.length} câu trả lời đúng
        </p>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        <h2 className="text-lg font-bold">Chi tiết từng câu:</h2>
        {questions.map((q, idx) => {
          const selected = answers[q.id];
          const isCorrect = selected === q.correctAnswer;

          return (
            <Card key={q.id} shadow="sm" padding="lg" withBorder>
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Câu {idx + 1}:</h3>
                <div>
                  <Badge color="gray" variant="light" mr={6}>
                    {q.topic}
                  </Badge>
                  <Badge color="green" variant="light">
                    {q.level}
                  </Badge>
                </div>
              </div>

              <div className="mt-2 text-lg font-medium">{q.content}</div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {q.options.map((op) => {
                  const isSelected = selected === op.id;
                  const isCorrectAnswer = q.correctAnswer === op.id;

                  return (
                    <div
                      key={op.id}
                      className={`p-3 rounded border ${
                        isCorrectAnswer
                          ? "bg-green-100 border-green-500"
                          : isSelected
                          ? "bg-red-100 border-red-500"
                          : "bg-white border-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{op.id}.</span>
                        <span>{op.text}</span>
                        {isCorrectAnswer && (
                          <IconCheck size={16} className="text-green-600" />
                        )}
                        {isSelected && !isCorrectAnswer && (
                          <IconX size={16} className="text-red-600" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <Button color="indigo" onClick={() => navigate("/home/user")}>
          🏠 Về trang chủ
        </Button>
        <Button variant="default" onClick={() => navigate("/home/exam")}>
          Chọn đề khác
        </Button>
      </div>
    </div>
  );
}
