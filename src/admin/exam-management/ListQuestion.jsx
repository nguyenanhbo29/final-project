import { Badge, Button, Card } from "@mantine/core";
import { IconList, IconPencil, IconPlus, IconTrash } from "@tabler/icons-react";
import axios from "axios";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function ListQuestion({ activeExam }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/questions?examId=${activeExam?.id}`)
      .then((res) => setQuestions(res.data));
  }, [activeExam?.id]);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <IconList />
            <h3>Quản lý câu hỏi</h3>
          </div>
          <Button>
            <div className="flex justify-between items-center">
              <IconPlus Button />
              <p>Thêm câu hỏi</p>
            </div>
          </Button>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          {questions?.map((question) => {
            return (
              <Card padding="lg" radius="md" withBorder>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">What the fuck ?</h3>
                    <div className="flex gap-2 mt-2">
                      {activeExam.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded-lg"
                        >
                          {topic}
                        </span>
                      ))}
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          activeExam.level === "Dễ"
                            ? "bg-green-100 text-green-700"
                            : activeExam.level === "Trung bình"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {activeExam.level}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="default">
                      <IconPencil color="gray" />
                    </Button>
                    <Button variant="default">
                      <IconTrash color="red" />
                    </Button>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  {question?.options?.map((item) => {
                    return (
                      <Card
                        padding="lg"
                        radius="md"
                        withBorder
                        className={clsx(
                          question.correctAnswer === item.id
                            ? "bg-green-100!"
                            : ""
                        )}
                      >
                        <div className={clsx("flex items-center gap-4")}>
                          <div
                            className={clsx(
                              "flex justify-center items-center w-6 h-6 rounded-full border text-sm font-bold"
                            )}
                          >
                            {item.id}
                          </div>
                          <p>{item.text}</p>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
