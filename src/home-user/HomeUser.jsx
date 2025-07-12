import { Button, Card } from "@mantine/core";
import {
  IconAward,
  IconLaurelWreath1,
  IconStar,
  IconPlayerPlay,
  IconHistory,
  IconClock,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function HomeUser() {
  const navigate = useNavigate();
  return (
    <div className="py-12 px-10 bg-blue-50 min-h-screen">
      <div className="grid gird cols-2 gap-2">
        <h3 className="text-3xl font-bold">Chào mừng trở lại!</h3>
        <p>Tiếp tục hành trình học tiếng Anh của bạn</p>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-12">
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="bg-blue-500! text-white!"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Điểm trung bình</h3>
            <div className="w-12 h-12 bg-blue-500 rounded-full flex justify-center items-center">
              <IconStar size={24} stroke={1.5} color="white" />
            </div>
          </div>
          <p className="text-2xl font-bold mt-4">78%</p>
          <p>Tốt!</p>
        </Card>

        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="bg-purple-500! text-white!"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Số bài đã thi</h3>
            <div className="w-12 h-12 bg-purple-500 rounded-full flex justify-center items-center">
              <IconAward size={24} stroke={1.5} color="white" />
            </div>
          </div>
          <p className="text-2xl font-bold mt-4">2</p>
          <p>Tiếp tục phát huy!</p>
        </Card>

        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="bg-green-500! text-white!"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Thành tích</h3>
            <div className="w-12 h-12 bg-green-500 rounded-full flex justify-center items-center">
              <IconLaurelWreath1 size={24} stroke={1.5} color="white" />
            </div>
          </div>
          <p className="text-2xl font-bold mt-4">1</p>
          <p>Bài đạt trên 80%</p>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-12">
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="h-48 flex justify-center"
        >
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="flex items-center gap-2">
              <IconPlayerPlay
                size={24}
                stroke={1.5}
                className="text-blue-500"
              />
              <h3 className="font-bold text-lg">Thi mới</h3>
            </div>

            <p className="text-sm text-gray-600">
              Chọn một bài thi để kiểm tra kiến thức của bạn
            </p>

            <Button
              color="indigo"
              radius="md"
              className="w-full! text-center"
              onClick={() => {
                navigate("/home/exam");
              }}
            >
              Bắt đầu thi
            </Button>
          </div>
        </Card>

        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="h-48 flex justify-center"
        >
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="flex items-center gap-2">
              <IconHistory size={24} stroke={1.5} className="text-purple-500" />
              <h3 className="font-bold text-lg">Lịch sử thi</h3>
            </div>

            <p className="text-sm text-gray-600">
              Xem lại các bài thi đã hoàn thành và kết quả
            </p>

            <Button
              variant="outline"
              color="dark"
              radius="md"
              className="w-full! text-center"
            >
              Xem lịch sử
            </Button>
          </div>
        </Card>
      </div>

      <div className="mt-12">
        <Card>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <IconClock size={20} />
            Kết quả gần đây
          </h3>

          <div className="mt-4 space-y-3">
            <Card padding="md" withBorder radius="md">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Grammar Basic</h4>
                  <p className="text-sm text-gray-600">15/1/2024 · 15 phút</p>
                </div>
                <div className="text-right">
                  <div className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-bold">
                    8/10
                  </div>
                  <p className="text-sm">80%</p>
                </div>
              </div>
            </Card>

            <Card padding="md" withBorder radius="md">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Vocabulary Advanced</h4>
                  <p className="text-sm text-gray-600">10/1/2024 · 25 phút</p>
                </div>
                <div className="text-right">
                  <div className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-bold">
                    15/20
                  </div>
                  <p className="text-sm">75%</p>
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
