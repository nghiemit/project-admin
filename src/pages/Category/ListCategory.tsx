import React, { useState } from "react";
import { PageBreadCrumb } from "../../components/common/PageBreadCrumb";
import Button from "../../components/ui/button/Button";
import { PlusIcon } from "../../icons";
import { Modal } from "../../components/ui/modal/Modal";
import { Label } from "../../components/form/Label";
import { InputField } from "../../components/form/input/InputField";
import UploadComponent from "../../components/form/UploadComponent";
import { uploadFile } from "../../services/uploadFile";
import { categoryServices } from "../../services/CategoryServices";
import { toast } from "react-toastify";
import { ComponentCard } from "../../components/common/ComponentCard";
import { Table } from "../../components/common/Table";
import { useCategories } from "./hooks/useCategories";
import type { CategoryRes } from "../../types/category/CategoryRes";
import dayjs from "dayjs";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3001";
export const ListCategory = () => {
  const { categories, refetchListCategory } = useCategories();
  const [isOpenDialogCategory, setIsOpenDialogCategory] = useState(false);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const handleChangeUpload = async (files: File[]) => {
    console.log(files, "files");
    const file = files[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await uploadFile(formData);
      if (res.status === 201) {
        console.log(res, "resres");
        setImage(`${baseURL}/${res.data.data.path}`);
        // toast.success("Thêm ảnh thành công", {
        //   position: "bottom-center",
        // });
      }
    } catch (error) {}
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("xxxxxxx", category);
    const res = await categoryServices.createCategory({
      image,
      name: category,
    });
    if (res.status === 201) {
      setIsOpenDialogCategory(false);
      setCategory("");
      setImage("");
      toast.success("Thêm danh mục thành công", {
        position: "bottom-center",
        autoClose: 500,
      });
      refetchListCategory();
    }
    console.log(res, "xxxxxxxxx");
  };
  console.log(categories, "categories");
  const handleRemoveCategory = async (id: number) => {
    const res = await categoryServices.removeCategory(id);
    console.log(res, "res");
    if (res.status === 200) {
      toast.success("Xóa thành công", {
        position: "bottom-center",
        autoClose: 500,
      });
      refetchListCategory();
    }
  };
  return (
    <div>
      <PageBreadCrumb pageTitle="Danh sách danh mục" />
      <div className="flex justify-end pb-2">
        <Button
          size="sm"
          endIcon={<PlusIcon />}
          onClick={() => setIsOpenDialogCategory(true)}
        >
          Thêm danh mục
        </Button>
      </div>
      <ComponentCard title="Danh sách danh mục">
        <Table
          dataThead={["Tên danh mục", "Hình ảnh", "Thời gian tạo", "Hành Động"]}
        >
          <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {!!categories.length &&
              categories.map((item: CategoryRes) => (
                <tr>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <img src={item.image} width={100} height={100} />
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {dayjs(item.createdAt).format("YYYY-MM-DD HH:mm")}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Button
                      variant="outline"
                      onClick={() => handleRemoveCategory(item.id)}
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </ComponentCard>
      <Modal
        isOpen={isOpenDialogCategory}
        onClose={() => setIsOpenDialogCategory(false)}
        className="max-w-[700px] m-4"
        // isFullscreen
      >
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Thêm danh mục
            </h4>
          </div>
          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto custom-scrollbar">
              <div>
                <Label>Tên danh mục</Label>
                <InputField
                  type="text"
                  value={category}
                  placeholder="Thêm danh mục"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="pt-4">
                <UploadComponent
                  title="Thêm ảnh danh mục"
                  multiple={false}
                  onChangeFile={(files) => handleChangeUpload(files)}
                />
              </div>
              <div className="pt-5">
                {image && (
                  <img
                    src={image}
                    width={150}
                    height={150}
                    className="rounded-2xl"
                  />
                )}
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsOpenDialogCategory(false)}
              >
                Close
              </Button>
              <Button
                size="sm"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleSubmit(e)
                }
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
