import { Card } from "@mantine/core";
import {
  IconAward,
  IconBook,
  IconStar,
  IconTimeDuration0,
} from "@tabler/icons-react";
import ListExam from "../exam-management/ListExam";
import ListQuestion from "../exam-management/ListQuestion";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomeAdmin() {
  const [exams, setExams] = useState([]);
  const [activeExam, setActiveExam] = useState(null);
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3001/exams")
      .then((res) => setExams(res.data))
      .catch((err) => console.error("Lỗi khi lấy dữ liệu đề thi:", err));
    axios
      .get("http://localhost:3001/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Lỗi khi lấy dữ liệu đề thi:", err));
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="px-8 py-8 grid gap-4">
        <h3 className="text-4xl font-bold ">Bảng điều khiển Admin</h3>
        <p className="text-gray-600">
          {" "}
          Quản lý đề thi và câu hỏi trong hệ thống
        </p>
        <div className="grid grid-cols-4 gap-8 mt-12 px-4">
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className="bg-blue-500! text-white!"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Tổng đề thi</h3>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex justify-center items-center">
                <IconStar size={24} stroke={1.5} color="white" />
              </div>
            </div>
            <h1>{exams.length}</h1>
          </Card>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className="bg-orange-500! text-white!"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Người dùng</h3>
              <div className="w-12 h-12  rounded-full flex justify-center items-center">
                <IconTimeDuration0 size={24} stroke={1.5} color="white" />
              </div>
            </div>
            <p>{users?.length}</p>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 px-12">
        <div>
          <ListExam
            exams={exams}
            activeExam={activeExam}
            setExams={setExams}
            setActiveExam={setActiveExam}
          />
        </div>
        <div className="col-span-2">
          <ListQuestion activeExam={activeExam} />
        </div>
      </div>
    </div>
  );
}
