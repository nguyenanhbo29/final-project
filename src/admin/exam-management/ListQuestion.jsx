import { Button, Card } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconList, IconPencil, IconPlus, IconTrash } from "@tabler/icons-react";
import axios from "axios";
import clsx from "clsx";
import { useEffect, useState } from "react";
import ModalAddEditQuestion from "./ModalAddEditQuestion";
import { wait } from "@testing-library/user-event/dist/utils";

export default function ListQuestion({ activeExam }) {
  const [questions, setQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [save, setSave] = useState(true);
  const [questionActive, setQuestionActive] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/questions?examId=${activeExam?.id}`)
      .then((res) => setQuestions(res.data));
    axios
      .get(`http://localhost:3001/questions`)
      .then((res) => setAllQuestions(res.data));
  }, [activeExam?.id]);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <IconList />
            <h3>Quản lý câu hỏi</h3>
          </div>

          {!!activeExam ? (
            <div className="flex gap-2">
              <Button onClick={open}>
                <div className="flex justify-between items-center">
                  <IconPlus Button />
                  <p>Thêm câu hỏi</p>
                </div>
              </Button>
              <div>
                <Button
                  disabled={save}
                  onClick={async () => {
                    const newQuestions = [
                      ...allQuestions.filter(
                        (item) => item.examId !== activeExam.id
                      ),
                      ...questions,
                    ];

                    try {
                      await axios.delete(
                        `http://localhost:3001/exams/${activeExam.id}`
                      );
                      await axios.post(`http://localhost:3001/exams`, {
                        ...activeExam,
                        questionsCount: questions.length,
                      });
                      await Promise.all(
                        allQuestions.map((question) =>
                          axios.delete(
                            `http://localhost:3001/questions/${question.id}`
                          )
                        )
                      );
                      await Promise.all(
                        newQuestions.map((question) =>
                          axios.post(
                            `http://localhost:3001/questions`,
                            question
                          )
                        )
                      );
                    } catch (error) {
                      console.error("❌ Có lỗi khi cập nhật:", error);
                    }
                  }}
                >
                  Lưu
                </Button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        {!!activeExam ? (
          <div className="mt-6 flex flex-col gap-4">
            {questions?.map((question) => {
              return (
                <Card padding="lg" radius="md" withBorder>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {question.content}
                      </h3>
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
                      <Button
                        variant="default"
                        onClick={() => {
                          setQuestionActive(question);
                          open();
                        }}
                      >
                        <IconPencil color="gray" />
                      </Button>
                      <Button
                        variant="default"
                        onClick={() => {
                          const newQuestions = questions.filter((item) => {
                            return item.id !== question.id;
                          });
                          setSave(false);
                          setQuestions(newQuestions);
                        }}
                      >
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
        ) : (
          <div className="mt-8">
            <p>Hãy chọn đề thi để chỉnh sửa</p>
          </div>
        )}
      </div>
      <ModalAddEditQuestion
        opened={opened}
        close={close}
        activeExam={activeExam}
        setSave={setSave}
        setQuestions={setQuestions}
        questions={questions}
        questionActive={questionActive}
        setQuestionActive={setQuestionActive}
      />
    </Card>
  );
}
