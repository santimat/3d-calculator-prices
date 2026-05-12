import { ProductDetail } from "@components/ui/ProductDetail";
import { Header } from "@components/ui/Header";
import { Modal } from "@components/ui/Modal";
import { PrintList } from "@components/ui/ProductList";
import { Searcher } from "@components/ui/Searcher";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductStore } from "@/store/printStore";

export function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("id") || "";
  const [openModal, setOpenModal] = useState(productId !== "");

  const onClose = () => {
    setSearchParams({});
    setOpenModal(false);
  };

  const products = useProductStore((state) => state.products);

  return (
    <>
      <Header
        title="Gestor de impresiones"
        description="Gestiona tus impresiones y calcula los precios de tus productos"
      />
      <main className="my-8 max-w-[85%] mx-auto flex flex-col gap-8">
        <Searcher />
        <PrintList products={products} />
        <Modal isOpen={openModal} onClose={onClose}>
          <ProductDetail productId={productId} />
        </Modal>
      </main>
    </>
  );
}
