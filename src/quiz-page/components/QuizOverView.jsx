import { Button, Card } from "@mantine/core";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBook,
  IconCheck,
  IconClock,
  IconMessage2Check,
} from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function QuizOverView({ setStartQuiz }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [exam, setExam] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/exams/${id}`)
      .then((res) => setExam(res.data))
      .catch((err) => console.error("Lỗi khi load đề:", err));
  }, [id]);

  if (!exam) return <p className="text-center mt-10">Đang tải đề thi...</p>;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <div className="w-200">
        <div className="text-center flex flex-col items-center gap-4">
          <div className="bg-purple-600 w-16 h-16 rounded-full flex justify-center items-center">
            <IconBook color="white" />
          </div>
          <h3 className="text-2xl font-bold">{exam.title}</h3>
          <p className="text-gray-600">{exam.description}</p>
        </div>

        <Card shadow="sm" padding="lg" radius="md" className="bg-blue-50! mt-8">
          <h4 className="text-base font-semibold text-blue-600">
            Thông tin bài thi:
          </h4>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex gap-2 items-center">
              <IconBook size={20} color="blue" />
              <p>Số câu hỏi: {exam.questionsCount}</p>
            </div>
            <div className="flex gap-2 items-center">
              <IconClock size={20} color="blue" />
              <p>Thời gian: {exam.duration} phút</p>
            </div>
            <div className="flex gap-2 items-center">
              <IconCheck size={20} color="blue" />
              <p>Dạng: {exam.type}</p>
            </div>
            <div className="flex gap-2 items-center">
              <IconMessage2Check size={20} color="blue" />
              <p className="text-green-600">
                Bạn cần đạt ít nhất <strong>{exam.passingScore}</strong> điểm để
                qua bài thi này.
              </p>
            </div>
          </div>
        </Card>

        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="bg-orange-50! mt-8 border-orange-300!"
        >
          <h3 className="text-orange-500 font-semibold">Lưu ý quan trọng:</h3>
          <p className="text-orange-400">
            • Bạn có {exam.duration} phút để hoàn thành {exam.questionsCount}{" "}
            câu hỏi
          </p>
          <p className="text-orange-400">
            • Có thể xem lại và thay đổi câu trả lời trước khi nộp bài
          </p>
          <p className="text-orange-400">
            • Bài thi sẽ tự động nộp khi hết thời gian
          </p>
          <p className="text-orange-400">
            • Hãy đọc kỹ đề trước khi chọn đáp án
          </p>
        </Card>

        <div className="mt-8 flex justify-center gap-4">
          <Button variant="default" onClick={() => navigate("/home/exam")}>
            <div className="flex gap-4 items-center">
              <IconArrowLeft />
              <span>Chọn đề khác</span>
            </div>
          </Button>

          <Button onClick={() => setStartQuiz(true)}>
            <div className="flex gap-4 items-center">
              <span>Bắt đầu thi</span>
              <IconArrowRight />
            </div>
          </Button>
        </div>
      </div>
    </Card>
  );
}
