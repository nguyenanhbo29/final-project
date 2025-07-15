import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Badge, Card, Slider } from "@mantine/core";
import CountdownTimer from "../../components/CountdownTimer";
import QuestionCard from "./QuestionCard";
import axios from "axios";

export default function QuizDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [exam, setExam] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // ✅ lưu đáp án người dùng chọn

  useEffect(() => {
    axios.get(`http://localhost:3001/exams/${id}`).then((res) => {
      setExam(res.data);
    });
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/questions?examId=${id}`)
      .then((res) => setQuestions(res.data));
  }, [id]);

  if (!exam || questions.length === 0) {
    return (
      <div className="text-center mt-10 text-lg text-gray-600">
        Đang tải đề thi...
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleSelectAnswer = (questionId, optionId) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      // ✅ Nộp bài → chuyển trang kết quả
      navigate(`/ket-qua`, {
        state: {
          exam,
          questions,
          answers,
        },
      });
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="bg-blue-50 min-h-screen py-6 px-8">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-xl">{exam.title}</h3>
            <Badge>
              Câu {currentIndex + 1}/{questions.length}
            </Badge>
          </div>
          <CountdownTimer initialSeconds={exam.duration * 60} />
        </div>
        <div className="pt-4">
          <Slider
            value={((currentIndex + 1) / questions.length) * 100}
            disabled
            color="blue"
          />
        </div>
      </Card>

      <div className="mt-8">
        <QuestionCard
          data={currentQuestion}
          questionIndex={currentIndex}
          onNext={handleNext}
          onPrev={handlePrev}
          isLast={currentIndex === questions.length - 1}
          selectedAnswer={answers[currentQuestion.id]}
          onSelect={(optionId) =>
            handleSelectAnswer(currentQuestion.id, optionId)
          }
        />
      </div>
    </div>
  );
}
