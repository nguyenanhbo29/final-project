import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardExam from "../home-exam/components/CardExam";

export default function HomeExam() {
  const navigate = useNavigate();
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/exams")
      .then((res) => setExams(res.data))
      .catch((err) => console.error("Lỗi khi lấy dữ liệu đề thi:", err));
  }, []);

  return (
    <div className="py-16 px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Chọn đề thi</h2>
        <p className="text-gray-600 mt-2 text-lg">
          Chọn một đề thi phù hợp với trình độ của bạn
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10">
        {exams.map((exam) => (
          <CardExam key={exam.id} exam={exam} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button
          variant="default"
          radius="md"
          className="px-6 py-2 text-sm"
          onClick={() => {
            navigate("/home/user");
          }}
        >
          ← Quay lại trang chủ
        </Button>
      </div>
    </div>
  );
}
