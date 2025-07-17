import {
  Button,
  Card,
  Modal,
  MultiSelect,
  NumberInput,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconList, IconPlus, IconTrash } from "@tabler/icons-react";
import axios from "axios";
import clsx from "clsx";
import { generateRandomId } from "../../helpers";

export default function ListExam({
  exams,
  activeExam,
  setActiveExam,
  setExams,
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      description: "",
      duration: 30,
      level: "Dễ",
      topics: ["Grammar"],
      type: "Trắc nghiệm",
    },
  });
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <IconList />
          <h3>Danh sách đề thi</h3>
        </div>
        <Button>
          <div className="flex justify-between items-center">
            <IconPlus />
            <p onClick={open}>Thêm đề</p>
          </div>
        </Button>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {exams?.map((exam) => {
          return (
            <Card
              padding="lg"
              radius="md"
              withBorder
              onClick={() => {
                setActiveExam(exam);
              }}
              className={clsx(
                "cursor-pointer hover:bg-purple-50!",
                activeExam?.id === exam?.id ? "bg-purple-100!" : ""
              )}
            >
              <div className="flex justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{exam?.title}</h3>
                  <p>{exam?.description}</p>
                </div>
                <Button
                  variant="default"
                  className="min-w-16!"
                  onClick={async () => {
                    await axios.delete(
                      `http://localhost:3001/exams/${exam.id}`
                    );
                    setExams((pre) => {
                      return pre.filter((item) => item.id !== exam.id);
                    });
                  }}
                >
                  <IconTrash color="red" size={16} />
                </Button>
              </div>
              <div className="flex justify-between mt-6">
                <p className="text-gray-500">{exam?.duration} phút</p>
              </div>
            </Card>
          );
        })}
      </div>
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
              const newExam = {
                id: generateRandomId(),
                title: values.title,
                description: values.description,
                questionsCount: 0,
                duration: values.duration,
                level: values.level,
                topics: values.topics,
                type: values.type,
              };
              axios
                .post("http://localhost:3001/exams", { ...newExam })
                .then((res) => {
                  console.log("Đã lưu đề thi:", res.data);
                })
                .catch((err) => {
                  console.error("Lỗi:", err);
                });
              setExams((pre) => {
                return [...pre, newExam];
              });
              close();
            })}
          >
            <TextInput
              withAsterisk
              label="Tiêu đề"
              placeholder="Nhập tiêu đề đề thi ..."
              key={form.key("title")}
              {...form.getInputProps("title")}
            />
            <Textarea
              withAsterisk
              rows={4}
              className="mt-4"
              label="Mô tả"
              placeholder="Nhập mô tả"
              key={form.key("description")}
              {...form.getInputProps("description")}
            />
            <NumberInput
              withAsterisk
              label="Thời gian (phút)"
              placeholder="Nhập thời gian"
              key={form.key("duration")}
              className="mt-4"
              min={1}
              {...form.getInputProps("duration")}
            />
            <Select
              withAsterisk
              label="Level"
              key={form.key("level")}
              className="mt-4"
              data={["Dễ", "Trung bình", "Khó"]}
              {...form.getInputProps("level")}
            />{" "}
            <MultiSelect
              withAsterisk
              label="Chủ đề"
              key={form.key("topics")}
              className="mt-4"
              data={["Grammar", "Vocab"]}
              {...form.getInputProps("topics")}
            />
            <Select
              withAsterisk
              label="Loại"
              key={form.key("type")}
              className="mt-4"
              min={1}
              data={["Trắc nghiệm"]}
              {...form.getInputProps("type")}
            />
            <div className="flex gap-2 justify-end">
              <Button onClick={close} variant="default" className="w-full mt-6">
                Hủy
              </Button>
              <Button type="submit" className="w-full mt-6">
                Thêm đề thi
              </Button>
            </div>
          </form>
        </Modal>
      </>
    </Card>
  );
}
