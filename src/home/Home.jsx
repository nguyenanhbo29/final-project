import { Button, Card } from "@mantine/core";
import {
  IconAward,
  IconClockPlus,
  IconRosetteDiscountCheck,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
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
        <div className="flex gap-4">
          <Button
            onClick={() => {
              navigate("/home/exam");
            }}
          >
            Bắt đầu luyện thi
          </Button>
          <Button variant="default">Quản lý hệ thống</Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-12 mt-12">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex justify-center items-center">
              <IconRosetteDiscountCheck color="white" size={24} stroke={1.5} />
            </div>
            <h3 className="text-xl font-bold">Luyện tập hiệu quả</h3>
            <p className="text-gray-600">
              Hệ thống câu hỏi đa dạng với các cấp độ khác nhau, giúp bạn luyện
              tập và cải thiện kỹ năng tiếng Anh một cách có hệ thống.
            </p>
          </div>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex justify-center items-center">
              <IconClockPlus color="white" size={24} stroke={1.5} />
            </div>
            <h3 className="text-xl font-bold">Luyện tập hiệu quả</h3>
            <p className="text-gray-600">
              Hệ thống câu hỏi đa dạng với các cấp độ khác nhau, giúp bạn luyện
              tập và cải thiện kỹ năng tiếng Anh một cách có hệ thống.
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
            <p className="text-2xl text-blue-600 font-bold">1000+</p>
            <p className="text-gray-600">Câu hỏi</p>
          </div>
          <div className="text-center">
            <p className="text-2xl text-blue-600 font-bold">1000+</p>
            <p className="text-gray-600">Câu hỏi</p>
          </div>
          <div className="text-center">
            <p className="text-2xl text-blue-600 font-bold">1000+</p>
            <p className="text-gray-600">Câu hỏi</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
