import { Button, Card, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconBook } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [typeForm, setTypeForm] = useState("user");
  const [listUser, setListUser] = useState([]);
  const [listAdmin, setListAdmin] = useState([]);
  const [error, setError] = useState("");

  const navigation = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => setListUser(res.data))
      .catch((err) => console.error("Lỗi khi lấy dữ liệu user:", err));
    axios
      .get("http://localhost:3001/admins")
      .then((res) => setListAdmin(res.data))
      .catch((err) => console.error("Lỗi khi lấy dữ liệu admin:", err));
  }, []);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <Card shadow="sm" padding="sm" radius="md" withBorder>
        <div className="min-w-[500px] py-16">
          <div className="flex flex-col gap-3 items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
              <IconBook color="white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Đăng nhập
            </h3>
            <p>Nhập thông tin để tiếp tục học tập</p>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant={typeForm === "admin" ? "default" : "filled"}
              onClick={() => {
                setTypeForm("user");
              }}
              className="w-[200px]!"
            >
              Học viên
            </Button>
            <Button
              variant={typeForm === "user" ? "default" : "filled"}
              onClick={() => {
                setTypeForm("admin");
              }}
              className="w-[200px]!"
            >
              Admin
            </Button>
          </div>

          <div className="mt-6">
            <form
              onSubmit={form.onSubmit((values) => {
                if (typeForm === "user") {
                  const resUser = listUser?.find(
                    (item) =>
                      item.username === values.username &&
                      item.password === values.password
                  );
                  if (resUser) {
                    localStorage.setItem("account", JSON.stringify(resUser));
                    navigation("/home/user");
                  } else {
                    setError("Tài khoản hoặc mật khẩu không chính xác");
                  }
                } else {
                  const resAdmin = listAdmin?.find(
                    (item) =>
                      item.username === values.username &&
                      item.password === values.password
                  );
                  if (resAdmin) {
                    localStorage.setItem("account", JSON.stringify(resAdmin));
                    navigation("/home/admin");
                  } else {
                    setError("Tài khoản hoặc mật khẩu không chính xác");
                  }
                }
              })}
            >
              <TextInput
                withAsterisk
                label="Tên đăng nhập"
                placeholder="Nhập tên đăng nhập của bạn"
                key={form.key("username")}
                {...form.getInputProps("username")}
              />
              <PasswordInput
                withAsterisk
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
                key={form.key("password")}
                className="mt-4"
                {...form.getInputProps("password")}
              />
              {error && <p className="text-red-500 py-2">{error}</p>}
              <Button type="submit" className="w-full mt-6">
                Đăng nhập
              </Button>
            </form>
          </div>

          {/*
          <form
            onSubmit={form.onSubmit((values) => {
              const { username, password } = values;

              const resAdmin = listAdmin.find(
                (item) => item.username === username && item.password === password
              );
              if (resAdmin) {
                localStorage.setItem("account", JSON.stringify(resAdmin));
                navigation("/home/admin");
                return;
              }

              const resUser = listUser.find(
                (item) => item.username === username && item.password === password
              );
              if (resUser) {
                localStorage.setItem("account", JSON.stringify(resUser));
                navigation("/home/user");
                return;
              }

              setError("Tài khoản hoặc mật khẩu không chính xác");
            })}
          >
            ...
          </form>
          */}
        </div>
      </Card>
    </div>
  );
}
