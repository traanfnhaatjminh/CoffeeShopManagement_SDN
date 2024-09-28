import React, { useState } from 'react';
import EditProductModal from './EditProductModal';
import AddProductModal from './AddProductModal';
import ImportProductModal from './ImportProductModal';
import WarehouseProduct from './warehouseProduct';  

function LayoutProduct() {
  const [showProductModal, setShowProductModal] = useState(false);
  const [showImportProductModal, setShowImportProductModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-auto">
        {/* Product */}
        <WarehouseProduct 
          setShowModal={setShowProductModal} 
          setShowEditModal={setShowEditProductModal} 
          setProduct={setSelectedProduct} 
          setShowImportModal={setShowImportProductModal} 
        />

      </div>

      {/* Add Product Modal */}
      {showProductModal && (
        <AddProductModal closeModal={() => setShowProductModal(false)} />
      )}

      {/* Import Product Modal */}
      {showImportProductModal && (
        <ImportProductModal closeModal={() => setShowImportProductModal(false)} />
      )}

      {/* Edit Product Modal */}
      {showEditProductModal && (
        <EditProductModal
          product={selectedProduct}
          closeModal={() => setShowEditProductModal(false)}
        />
      )}
    </div>
  );
}

export default LayoutProduct;
