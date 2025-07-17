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
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../helpers";

export default function HomeResult() {
  const navigate = useNavigate();
  const [historyExams, setHistoryExams] = useState([]);
  const account = JSON.parse(localStorage.getItem("account"));
  useEffect(() => {
    axios
      .get("http://localhost:3001/history-exam")
      .then((res) => setHistoryExams(res.data))
      .catch((err) => console.error("Lỗi khi lấy dữ liệu đề thi:", err));
  }, []);

  const historyExamsByMe = historyExams.filter((item) => {
    return item.userId + "" === account.id;
  });

  const maxPercent = Math.max(...historyExamsByMe.map((item) => item.percent));
  const totalDuration = historyExamsByMe.reduce(
    (sum, exam) => sum + exam.duration,
    0
  );
  const totalPercent = historyExamsByMe.reduce(
    (sum, exam) => sum + exam.percent,
    0
  );
  return (
    <div>
      <div className="mt-6">
        <div className="flex justify-between px-4">
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
      </div>
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
            <p className="text-2xl font-bold mt-4">
              {totalPercent / historyExamsByMe?.length}%
            </p>
            {totalPercent / historyExamsByMe?.length > 80 ? (
              <p>Tốt!</p>
            ) : (
              <p>Trung bình!</p>
            )}
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
            <p className="text-2xl font-bold mt-4">
              {historyExamsByMe?.length}
            </p>
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
            <p className="text-2xl font-bold mt-4">{maxPercent}%</p>
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
            <p className="text-2xl font-bold mt-4">{totalDuration}</p>
            <p>Phút đã luyện tập</p>
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
            {historyExamsByMe?.map((item) => {
              return (
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {item.examName}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        {item?.topics?.map((topic) => {
                          return (
                            <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-full ">
                              {topic}
                            </span>
                          );
                        })}
                        <span className="bg-green-100 text-green-600 text-sm px-2 py-0.5 rounded-full">
                          {item.level}
                        </span>
                        <span className="bg-gray-800 text-white text-sm px-2 py-0.5 rounded-full">
                          {item?.totalCorrect}/{item?.questionsCount} (
                          {item.percent}%)
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                        <span className="flex items-center gap-1">
                          <IconCalendar size={14} />{" "}
                          {formatDate(item?.dateTaken)}
                        </span>
                        <span className="flex items-center gap-1">
                          <IconClock size={14} /> {item?.duration} phút
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-green-600 font-bold text-2xl">
                        {item?.percent}%
                      </p>
                      <Progress
                        value={item?.percent}
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
                      {item.percent > 80 ? (
                        <span>⭐ Rất tốt</span>
                      ) : (
                        <span>Trung bình</span>
                      )}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
