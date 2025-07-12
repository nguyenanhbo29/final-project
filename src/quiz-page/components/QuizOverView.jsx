import { Button, Card } from "@mantine/core";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBook,
  IconCheck,
  IconClock,
  IconMessage2Check,
} from "@tabler/icons-react";

export default function QuizOverView(props) {
  const { setStartQuiz } = props;
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <div className="w-200">
        <div className="text-center flex flex-col items-center gap-4">
          <div className="bg-purple-600 w-16 h-16 rounded-full flex justify-center items-center">
            <IconBook color="white" />
          </div>
          <h3 className="text-2xl font-bold">Bài thi cơ bản</h3>
          <p className="text-gray-600">Bài thi danh cho người mới bắt đầu</p>
        </div>
        <Card shadow="sm" padding="lg" radius="md" className="bg-blue-50! mt-8">
          <h4 className="text-base font-semibold text-blue-600">
            Thông tin bài thi:
          </h4>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex gap-2 items-center">
              <IconBook size={20} color="blue" />
              <p>Số câu hỏi: 3</p>
            </div>
            <div className="flex gap-2 items-center">
              <IconClock size={20} color="blue" />
              <p>Số câu hỏi: 3</p>
            </div>
            <div className="flex gap-2 items-center">
              <IconCheck size={20} color="blue" />
              <p>Số câu hỏi: 3</p>
            </div>
            <div className="flex gap-2 items-center">
              <IconMessage2Check size={20} color="blue" />
              <p>Số câu hỏi: 3</p>
            </div>
          </div>
        </Card>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="bg-orange-50! mt-8 border-orange-300! "
        >
          <h3 className="text-orange-500 font-semibold">Lưu ý quan trọng:</h3>
          <p className="text-orange-400">
            • Bạn có 30 phút để hoàn thành 3 câu hỏi
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
          <Button variant="default">
            <div className="flex gap-4 items-center">
              <IconArrowLeft />
              <span>Chọn đề khác</span>
            </div>
          </Button>
          <Button
            onClick={() => {
              setStartQuiz(true);
            }}
          >
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
