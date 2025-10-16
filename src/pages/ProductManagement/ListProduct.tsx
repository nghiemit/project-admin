import React, { useEffect, useState } from "react";
import { Table } from "../../components/common/Table";
import { ComponentCard } from "../../components/common/ComponentCard";
import { PageBreadCrumb } from "../../components/common/PageBreadCrumb";
import Button from "../../components/ui/button/Button";
import { PlusIcon } from "../../icons";
import { useNavigate } from "react-router-dom";
import { productServices } from "../../services/productServices";
import type { Product } from "../../types/product/productType";

export const ListProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [filterProduct, setFilterProduct] = useState({
    offset: 0,
    limit: 10,

    sort: "DATE_ASC",

    // search: "",
    // isNewArrival: 1,
    // isBestseller: 1,
    // categoryId: 0,
  });
  const fetchDataProduct = async () => {
    const res = await productServices.getListProducts(filterProduct);
    console.log(res, "res res res ");
    if (res.status === 200) {
      setProducts(res.data.products);
    }
  };
  useEffect(() => {
    fetchDataProduct();
  }, []);
  return (
    <div className="space-y-6">
      <PageBreadCrumb pageTitle="Danh sách sản phẩm" />
      <div className="flex justify-end">
        <Button
          onClick={() => navigate("/product")}
          size="sm"
          endIcon={<PlusIcon />}
        >
          Thêm sản phẩm
        </Button>
      </div>
      <ComponentCard title="Danh sách sản phẩm">
        <Table dataThead={["Tên sản phẩm", "Hình ảnh", "Danh mục", "Giá"]}>
          <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {products.length > 0 &&
              products.map((i) => (
                <tr>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {i.name}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    fsdfdsfsd fsdfdsfsd fsdfdsfsd fsdfdsfsd
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {i.category?.name}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {i.price}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </ComponentCard>
    </div>
  );
};
