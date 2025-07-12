import { Button } from "@mantine/core";

export function Header() {
  return (
    <div className="bg-white shadow-md sticky top-0 z-1000">
      <div className="px-24 flex justify-between py-6">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          English Practice Hub
        </h3>
        <div className="flex gap-4">
          <Button variant="default">Đăng nhập học viên</Button>
          <Button>Đăng nhập admin</Button>
        </div>
      </div>
    </div>
  );
}
