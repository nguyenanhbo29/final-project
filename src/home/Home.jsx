import { Button, Card } from "@mantine/core";
import {
  IconAward,
  IconClockPlus,
  IconRosetteDiscountCheck,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const account = JSON.parse(localStorage.getItem("account"));

  return (
    <div className="py-12 px-20 bg-purple-50 h-screen">
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Luyện Thi Tiếng Anh Online
        </h3>
        <p className="text-center text-xl text-gray-600">
          Nền tảng luyện thi tiếng Anh hiện đại với hàng ngàn câu hỏi được cập
          nhật liên tục. Nâng cao trình độ tiếng Anh của bạn một cách hiệu quả
          và thú vị.
        </p>
        {!account && (
          <div className="flex gap-4">
            <Button
              onClick={() => {
                navigate("/login");
              }}
            >
              Bắt đầu luyện thi
            </Button>
            <Button
              variant="default"
              onClick={() => {
                navigate("/login");
              }}
            >
              Quản lý hệ thống
            </Button>
          </div>
        )}
        {account?.role === "user" && (
          <>
            <Button
              onClick={() => {
                navigate("/login");
              }}
            >
              Bắt đầu luyện thi
            </Button>
          </>
        )}
        {account?.role === "admin" && (
          <>
            <Button
              variant="default"
              onClick={() => {
                navigate("/login");
              }}
            >
              Quản lý hệ thống
            </Button>
          </>
        )}
      </div>
      <div className="grid grid-cols-3 gap-12 mt-12">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex justify-center items-center">
              <IconRosetteDiscountCheck color="white" size={24} stroke={1.5} />
            </div>
            <h3 className="text-xl font-bold">Luyện tập hiệu quả</h3>
            <p className="text-gray-600">
              Mô phỏng điều kiện thi thực tế với thời gian giới hạn, giúp bạn
              làm quen và chuẩn bị tốt nhất cho kỳ thi quan trọng.
            </p>
          </div>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex justify-center items-center">
              <IconClockPlus color="white" size={24} stroke={1.5} />
            </div>
            <h3 className="text-xl font-bold">Theo Dõi Tiến Bộ</h3>
            <p className="text-gray-600">
              Xem chi tiết kết quả, phân tích điểm mạnh điểm yếu và theo dõi
              tiến bộ học tập qua từng bài thi để cải thiện hiệu quả.
            </p>
          </div>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex justify-center items-center">
              <IconAward color="white" size={24} stroke={1.5} />
            </div>
            <h3 className="text-xl font-bold">Luyện tập hiệu quả</h3>
            <p className="text-gray-600">
              Hệ thống câu hỏi đa dạng với các cấp độ khác nhau, giúp bạn luyện
              tập và cải thiện kỹ năng tiếng Anh một cách có hệ thống.
            </p>
          </div>
        </Card>
      </div>
      <Card shadow="sm" padding="lg" radius="md" withBorder className="mt-16">
        <div className="grid grid-cols-4 gap-20">
          <div className="text-center">
            <p className="text-2xl text-blue-600 font-bold">1000+</p>
            <p className="text-gray-600">Câu hỏi</p>
          </div>
          <div className="text-center">
            <p className="text-2xl text-purple-600 font-bold">500+</p>
            <p className="text-gray-600">Học viên</p>
          </div>
          <div className="text-center">
            <p className="text-2xl text-green-600 font-bold">50+</p>
            <p className="text-gray-600">Bài thi</p>
          </div>
          <div className="text-center">
            <p className="text-2xl text-red-600 font-bold">95%</p>
            <p className="text-gray-600">Hài lòng</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
