import {
  Button,
  Modal,
  MultiSelect,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { generateRandomId } from "../../helpers";
import { useForm } from "@mantine/form";
import { useEffect } from "react";

export default function ModalAddEditQuestion({
  opened,
  close,
  activeExam,
  setSave,
  setQuestions,
  questions,
  questionActive,
}) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      ...questionActive,
    },
  });

  useEffect(() => {
    if (questionActive) {
      form.setValues({
        ...questionActive,
        topic: questionActive.topic,
        optionA: questionActive.options[0].text,
        optionB: questionActive.options[1].text,
        optionC: questionActive.options[2].text,
        optionD: questionActive.options[3].text,
      });
    } else {
      form.reset();
    }
  }, [questionActive]);

  return (
    <>
      <Modal
        opened={opened}
        centered
        size={"lg"}
        onClose={close}
        title={<p className="text-lg font-semibold">Thêm đề thi mới</p>}
      >
        <form
          onSubmit={form.onSubmit((values) => {
            if (questionActive) {
              const newQuestions = questions.map((item) => {
                if (item.id === questionActive.id) {
                  return {
                    id: questionActive.id,
                    examId: activeExam.id,
                    content: values.content,
                    level: values.level,
                    topic: values.topic,
                    options: [
                      {
                        id: "A",
                        text: values.optionA,
                      },
                      {
                        id: "B",
                        text: values.optionB,
                      },
                      {
                        id: "C",
                        text: values.optionC,
                      },
                      {
                        id: "D",
                        text: values.optionD,
                      },
                    ],
                    correctAnswer: values.correctAnswer,
                  };
                }
                return item;
              });
              setQuestions(newQuestions);
            } else {
              const newQuestion = {
                id: generateRandomId(),
                examId: activeExam.id,
                content: values.content,
                level: values.level,
                topic: values.topic,
                options: [
                  {
                    id: "A",
                    text: values.optionA,
                  },
                  {
                    id: "B",
                    text: values.optionB,
                  },
                  {
                    id: "C",
                    text: values.optionC,
                  },
                  {
                    id: "D",
                    text: values.optionD,
                  },
                ],
                correctAnswer: values.correctAnswer,
              };
              setQuestions((pre) => {
                return [...pre, newQuestion];
              });
            }
            setSave(false);
            close();
          })}
        >
          <Textarea
            withAsterisk
            rows={4}
            className="mt-4"
            label="Câu hỏi"
            placeholder="Nhập nội dung câu hỏi..."
            key={form.key("content")}
            {...form.getInputProps("content")}
          />
          <div className="grid grid-cols-2 gap-6 pt-6">
            <TextInput
              withAsterisk
              label="Đáp án A"
              placeholder="Nhập nội dung"
              key={form.key("optionA")}
              {...form.getInputProps("optionA")}
            />{" "}
            <TextInput
              withAsterisk
              label="Đáp án B"
              placeholder="Nhập nội dung"
              key={form.key("optionB")}
              {...form.getInputProps("optionB")}
            />{" "}
            <TextInput
              withAsterisk
              label="Đáp án C"
              placeholder="Nhập nội dung"
              key={form.key("optionC")}
              {...form.getInputProps("optionC")}
            />{" "}
            <TextInput
              withAsterisk
              label="Đáp án D"
              placeholder="Nhập nội dung"
              key={form.key("optionD")}
              {...form.getInputProps("optionD")}
            />
          </div>
          <MultiSelect
            label="Chủ đề"
            placeholder="Hãy chọn chủ đề"
            className="mt-4!"
            key={form.key("topic")}
            data={["Grammar", "Vocab"]}
            {...form.getInputProps("topic")}
          />
          <div className="grid grid-cols-2 gap-6">
            <Select
              withAsterisk
              label="Đáp án đúng"
              key={form.key("correctAnswer")}
              className="mt-4"
              min={1}
              data={[
                {
                  value: "A",
                  label: "Đáp án A",
                },
                {
                  value: "B",
                  label: "Đáp án B",
                },
                {
                  value: "C",
                  label: "Đáp án C",
                },
                {
                  value: "D",
                  label: "Đáp án D",
                },
              ]}
              {...form.getInputProps("correctAnswer")}
            />
            <Select
              withAsterisk
              label="Độ khó"
              key={form.key("type")}
              className="mt-4"
              min={1}
              data={["Dễ", "Trung bình", "Khó"]}
              {...form.getInputProps("type")}
            />
          </div>

          <div className="flex gap-2 justify-end">
            <Button onClick={close} variant="default" className="w-full mt-6">
              Hủy
            </Button>
            <Button type="submit" className="w-full mt-6">
              Lưu
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
