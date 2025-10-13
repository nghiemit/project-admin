import React, { useState } from "react";
import { PageBreadCrumb } from "../../components/common/PageBreadCrumb";
import Button from "../../components/ui/button/Button";
import { PlusIcon } from "../../icons";
import { Modal } from "../../components/ui/modal/Modal";
import { Label } from "../../components/form/Label";
import { InputField } from "../../components/form/input/InputField";
import UploadComponent from "../../components/form/UploadComponent";

export const ListCategory = () => {
  const [isOpenDialogCategory, setIsOpenDialogCategory] = useState(false);
  const [category, setCategory] = useState("");
  const handleChangeUpload = (files: File[]) => {
    console.log(files, "files");
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
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsOpenDialogCategory(false)}
              >
                Close
              </Button>
              <Button size="sm" onClick={() => {}}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
