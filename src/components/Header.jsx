import { Avatar, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const account = JSON.parse(localStorage.getItem("account"));
  return (
    <div className="bg-white shadow-md sticky top-0 z-10">
      <div className="px-24 flex justify-between py-6">
        <h3
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          English Practice Hub
        </h3>
        <div className="flex gap-4">
          {account ? (
            <>
              <div className="flex items-center gap-2">
                <Avatar />
                <p>{account.username}</p>
                <Button
                  onClick={() => {
                    localStorage.removeItem("account");
                    navigate("/");
                  }}
                  variant="subtle"
                >
                  Thoát
                </Button>
              </div>
            </>
          ) : (
            <Button
              onClick={() => {
                navigate("/login");
              }}
            >
              Đăng nhập
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
