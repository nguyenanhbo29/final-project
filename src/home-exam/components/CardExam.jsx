import { Button, Card } from "@mantine/core";
import { IconClock, IconFileText, IconListDetails } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function CardExam() {
  const navigate = useNavigate();
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <div className="relative">
        <div className="absolute top-0 right-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
          <IconFileText size={20} color="white" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1">Bài thi cơ bản</h3>
        <p className="text-gray-600 mb-4">Bài thi dành cho người mới bắt đầu</p>

        <div className="flex gap-6 text-sm text-gray-700 mb-2">
          <div className="flex items-center gap-2">
            <IconListDetails size={16} />
            <span>3 câu hỏi</span>
          </div>
          <div className="flex items-center gap-2">
            <IconClock size={16} />
            <span>30 phút</span>
          </div>
        </div>

        <div className="flex gap-2 mb-3">
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
            Dễ
          </span>
          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-medium">
            Trung bình
          </span>
        </div>

        <div className="flex gap-2 flex-wrap mb-5">
          <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded-lg">
            Grammar
          </span>
          <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded-lg">
            Vocabulary
          </span>
        </div>

        <Button
          fullWidth
          radius="md"
          onClick={() => {
            navigate("/quiz/123");
          }}
          className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:opacity-90 text-white font-semibold"
        >
          Chọn đề thi này
        </Button>
      </div>
    </Card>
  );
}
