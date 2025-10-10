import React from "react";
import { Table } from "../../components/common/Table";
import { ComponentCard } from "../../components/common/ComponentCard";
import { PageBreadCrumb } from "../../components/common/PageBreadCrumb";
import Button from "../../components/ui/button/Button";
import { PlusIcon } from "../../icons";
import { useNavigate } from "react-router-dom";

export const ListProduct = () => {
    const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <PageBreadCrumb pageTitle="Danh sách sản phẩm" />
      <div className="flex justify-end">
        <Button onClick={() => navigate("/product")} size="sm" endIcon={<PlusIcon />}>
          Thêm sản phẩm
        </Button>
      </div>
      <ComponentCard title="Danh sách sản phẩm">
        <Table dataThead={["Tên sản phẩm", "Hình ảnh", "Danh mục", "Giá"]}>
          <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            <tr>
              <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                fsdfdsfsd fsdfdsfsd fsdfdsfsd fsdfdsfsd
              </td>
              <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                fsdfdsfsd fsdfdsfsd fsdfdsfsd fsdfdsfsd
              </td>
              <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                fsdfdsfsd fsdfdsfsd fsdfdsfsd fsdfdsfsd
              </td>
              <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                fsdfdsfsd fsdfdsfsd fsdfdsfsd fsdfdsfsd
              </td>
            </tr>
          </tbody>
        </Table>
      </ComponentCard>
    </div>
  );
};
