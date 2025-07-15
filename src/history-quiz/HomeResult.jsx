import { Button, Card, Progress } from "@mantine/core";
import {
  IconArrowLeft,
  IconAward,
  IconBook,
  IconCalendar,
  IconClock,
  IconStar,
  IconTimeDuration0,
} from "@tabler/icons-react";
import { navigate, useNavigate } from "react-router-dom";

export default function HomeResult() {
  const navigate = useNavigate();
  return (
    <div>
      <Card shadow="sm" padding="sm" radius="md" withBorder>
        <div className="flex justify-center gap-160">
          <div className="flex items-center gap-8">
            <IconBook size={48} stroke={1.5} className="text-blue-500" />
            <h3 className="font-bold text-2xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Lịch sử thi
            </h3>
          </div>
          <Button
            variant="default"
            onClick={() => {
              navigate("/home/user");
            }}
          >
            <div className="flex gap-4 items-center">
              <IconArrowLeft />
              <span>Quay lại</span>
            </div>
          </Button>
        </div>
      </Card>
      <div className="grid grid cols gap-8">
        <div className="grid grid-cols-4 gap-8 mt-12 px-4">
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
            <p className="text-2xl font-bold mt-4">83%</p>
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
              <h3 className="font-semibold">Tổng số bài</h3>
              <div className="w-12 h-12  rounded-full flex justify-center items-center">
                <IconBook size={24} stroke={1.5} color="white" />
              </div>
            </div>
            <p className="text-2xl font-bold mt-4">5</p>
            <p>Bài thi đã hoàn thành</p>
          </Card>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className="bg-green-500! text-white!"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Điểm cao nhất</h3>
              <div className="w-12 h-12 rounded-full flex justify-center items-center">
                <IconAward size={24} stroke={1.5} color="white" />
              </div>
            </div>
            <p className="text-2xl font-bold mt-4">90%</p>
            <p>Thành tích tốt nhất</p>
          </Card>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className="bg-orange-500! text-white!"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Thời gian uyện tập</h3>
              <div className="w-12 h-12  rounded-full flex justify-center items-center">
                <IconTimeDuration0 size={24} stroke={1.5} color="white" />
              </div>
            </div>
            <p className="text-2xl font-bold mt-4">104</p>
            <p>Phút đã uyện tập</p>
          </Card>
        </div>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex justify-center items-center">
              <IconCalendar size={28} stroke={1.5} color="gray" />
            </div>
            <h3 className="font-bold text-xl">Chi tiết lịch sử thi</h3>
          </div>
          <p className="text-gray-500 mt-2 ml-4">
            Danh sách tất cả các bài thi đã hoàn thành
          </p>

          <div className="grid grid cols gap-4">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Grammar Basic Test
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-full ">
                      Grammar
                    </span>
                    <span className="bg-green-100 text-green-600 text-sm px-2 py-0.5 rounded-full">
                      Dễ
                    </span>
                    <span className="bg-gray-800 text-white text-sm px-2 py-0.5 rounded-full">
                      8/10 (80%)
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <IconCalendar size={14} /> 15/1/2024
                    </span>
                    <span className="flex items-center gap-1">
                      <IconClock size={14} /> 15 phút
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p className="text-green-600 font-bold text-2xl">80%</p>
                  <Progress
                    value={80}
                    size="sm"
                    radius="xl"
                    className="w-24 mt-1"
                    color="grape"
                  />
                </div>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between text-sm">
                <span className="text-blue-600 font-medium flex items-center gap-1">
                  ⭐ Rất tốt
                </span>
                <span className="text-gray-600 flex items-center gap-1">
                  ⚡ Nhanh
                </span>
              </div>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Vocabulary Advanced
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-full ">
                      Vocabulary
                    </span>
                    <span className="bg-red-100 text-red-600 text-sm px-2 py-0.5 rounded-full">
                      Khó
                    </span>
                    <span className="bg-gray-800 text-white text-sm px-2 py-0.5 rounded-full">
                      15/20 (75%)
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <IconCalendar size={14} /> 10/1/2024
                    </span>
                    <span className="flex items-center gap-1">
                      <IconClock size={14} /> 25 phút
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p className="text-green-600 font-bold text-2xl">75%</p>
                  <Progress
                    value={75}
                    size="sm"
                    radius="xl"
                    className="w-24 mt-1"
                    color="grape"
                  />
                </div>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between text-sm">
                <span className="text-blue-600 font-medium flex items-center gap-1">
                  ⭐ Tốt
                </span>
                <span className="text-gray-600 flex items-center gap-1">
                  ⏰ Vừa phải
                </span>
              </div>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Reading Comprehension
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-full ">
                      Reading
                    </span>
                    <span className="bg-yellow-100 text-orange-600 text-sm px-2 py-0.5 rounded-full">
                      Trung bình
                    </span>
                    <span className="bg-gray-800 text-white text-sm px-2 py-0.5 rounded-full">
                      12/15 (80%)
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <IconCalendar size={14} />
                      8/1/2024
                    </span>
                    <span className="flex items-center gap-1">
                      <IconClock size={14} /> 30 phút
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p className="text-green-600 font-bold text-2xl">80%</p>
                  <Progress
                    value={80}
                    size="sm"
                    radius="xl"
                    className="w-24 mt-1"
                    color="grape"
                  />
                </div>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between text-sm">
                <span className="text-blue-600 font-medium flex items-center gap-1">
                  ⭐ Rất tốt
                </span>
                <span className="text-gray-600 flex items-center gap-1">
                  🐌 Chậm rãi
                </span>
              </div>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Grammar Intermediate
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-full ">
                      Grammar
                    </span>
                    <span className="bg-yellow-100 text-orange-600 text-sm px-2 py-0.5 rounded-full">
                      Trung bình
                    </span>
                    <span className="bg-gray-800 text-white text-sm px-2 py-0.5 rounded-full">
                      18/20 (90%)
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <IconCalendar size={14} /> 5/1/2024
                    </span>
                    <span className="flex items-center gap-1">
                      <IconClock size={14} /> 22 phút
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p className="text-green-600 font-bold text-2xl">90%</p>
                  <Progress
                    value={90}
                    size="sm"
                    radius="xl"
                    className="w-24 mt-1"
                    color="grape"
                  />
                </div>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between text-sm">
                <span className="text-blue-600 font-medium flex items-center gap-1">
                  🏆 Xuất sắc
                </span>
                <span className="text-gray-600 flex items-center gap-1">
                  ⏰ Vừa phải
                </span>
              </div>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Vocabulary Basic
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-full ">
                      Vocabulary
                    </span>
                    <span className="bg-green-100 text-green-600 text-sm px-2 py-0.5 rounded-full">
                      Dễ
                    </span>
                    <span className="bg-gray-800 text-white text-sm px-2 py-0.5 rounded-full">
                      9/10 (90%)
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <IconCalendar size={14} /> 15/1/2024
                    </span>
                    <span className="flex items-center gap-1">
                      <IconClock size={14} /> 12 phút
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p className="text-green-600 font-bold text-2xl">90%</p>
                  <Progress
                    value={90}
                    size="sm"
                    radius="xl"
                    className="w-24 mt-1"
                    color="grape"
                  />
                </div>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between text-sm">
                <span className="text-blue-600 font-medium flex items-center gap-1">
                  🏆 Xuất sắc
                </span>
                <span className="text-gray-600 flex items-center gap-1">
                  ⚡ Nhanh
                </span>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
