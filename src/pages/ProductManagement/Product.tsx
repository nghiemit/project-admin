import React, { useState } from "react";
import { PageBreadCrumb } from "../../components/common/PageBreadCrumb";
import { ComponentCard } from "../../components/common/ComponentCard";
import { Label } from "../../components/form/Label";
import { InputField } from "../../components/form/input/InputField";
import Select from "../../components/form/Select";
import Switch from "../../components/form/switch/Switch";
import UploadComponent from "../../components/form/UploadComponent";
import Button from "../../components/ui/button/Button";
import { PlusIcon } from "../../icons";
import { useNavigate } from "react-router-dom";

export const Product = () => {
  const options = [
    {
      value: "5825983459834",
      label: "Áo Thun",
    },
    {
      value: "6456546546",
      label: "Áo POLO",
    },
    {
      value: "4234324234",
      label: "Quần Jean",
    },
  ];
  const navigate = useNavigate();
  const [isShowDiscount, setIsShowDiscount] = useState<boolean>(false);

  const handleSelectChange = (value: string) => {
    console.log(value, "xxxxxxxxxxx");
  };
  const handleSwitchChange = (checked: boolean) => {
    console.log(checked);
  };
  const handleSwitchChangeDiscount = (checked: boolean) => {
    setIsShowDiscount(checked);
  };
  const handleChangeUpload = (files: File[]) => {
    console.log(files, "files");
  };
  return (
    <>
      <PageBreadCrumb pageTitle="Thêm sản phẩm" />
      <div className="flex justify-end mb-6">
        <Button
          onClick={() => navigate("/product")}
          size="sm"
          endIcon={<PlusIcon />}
        >
          Thêm sản phẩm
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="Thông tin cơ bản">
            <div>
              <Label htmlFor="1">Tên sản phẩm</Label>
              <InputField id="1" type="text" placeholder="Nhập tên sản phẩm" />
            </div>
            <div>
              <Label htmlFor="2">Danh mục</Label>
              <Select
                options={options}
                onChange={(value) => handleSelectChange(value)}
                placeholder="Chọn danh mục"
              />
            </div>
            <div className="flex gap-3">
              <div className="w-1/2">
                <Label htmlFor="3">Giá</Label>
                <InputField
                  type="number"
                  id="3"
                  placeholder="Nhập giá sản phẩm"
                />
              </div>
              <div className="w-1/2">
                <Label htmlFor="4">Số lượng</Label>
                <InputField
                  type="number"
                  id="4"
                  placeholder="Nhập số lượng sản phẩm"
                />
              </div>
            </div>
          </ComponentCard>
          <ComponentCard title="Cài đặt sản phẩm">
            <div className="flex gap-20 justify-between">
              <Switch
                label="Discount"
                defaultChecked={isShowDiscount}
                onChange={handleSwitchChangeDiscount}
              />
              <Switch
                label="Hàng giảm giá"
                defaultChecked={true}
                onChange={handleSwitchChange}
              />
              <Switch
                label="Hàng Hot"
                defaultChecked={true}
                onChange={handleSwitchChange}
              />

              {/* <Switch label="Disabled" disabled={true} /> */}
            </div>{" "}
            <div>
              {isShowDiscount && (
                <div className="w-1/2">
                  <Label htmlFor="5">Giảm giá</Label>
                  <InputField
                    type="number"
                    id="5"
                    placeholder="Nhập % giảm giá"
                  />
                </div>
              )}
            </div>
          </ComponentCard>
        </div>
        <div className="space-y-6">
          <ComponentCard title="Thêm ảnh sản phẩm">
            <UploadComponent
              title="Thêm ảnh sản phẩm"
              multiple={true}
              onChangeFile={(files) => handleChangeUpload(files)}
            />
          </ComponentCard>
        </div>
      </div>
    </>
  );
};
