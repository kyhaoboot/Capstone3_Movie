import { useState } from "react";
import api from "../../../services/api";
import { Navigate, useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();
  const [values, setValue] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleOnchange = (event) => {
    setValue({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/QuanLyNguoiDung/DangNhap", values);
      // console.log("🚀 ~ handleSubmit ~ response:", response);
      const user = response.data.content;
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        if (user.maLoaiNguoiDung === "QuanTri") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
    console.log("values", values);
  };
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user && user.maLoaiNguoiDung === "QuanTri") {
  //     return <Navigate to="/admin/dashboard" />;
  //   }
  //   if (user && user.maLoaiNguoiDung !== "Quantri") {
  //     return <Navigate to="/" />;
  //   }
  // });

  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.maLoaiNguoiDung === "QuanTri") {
    return <Navigate to="/admin/dashboard" />;
  }
  if (user && user.maLoaiNguoiDung !== "QuanTri") {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">
      <form className="w-96 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tài Khoản
          </label>
          <input
            type="text"
            id=""
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder="nhập tài khoản"
            required
            name="taiKhoan"
            onChange={handleOnchange}
            value={values.taiKhoan}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mật Khẩu
          </label>
          <input
            type="password"
            id=""
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
            name="matKhau"
            onChange={handleOnchange}
            value={values.matKhau}
          />
        </div>

        <button
          type=""
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>
    </div>
  );
}
