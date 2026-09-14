"use client";

import React, { useState } from "react";
type Product={
    name:string;
    price:number;
    stock:number;
};

type ProductFormData = {
  name: string;
  price: string;
  stock: string;
};

type ProductFormErrors = {
  name: string;
  price: string;
  stock: string;
};

export function ProductForm() {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    price: "",
    stock: "",
  });

  const [errors, setErrors] = useState<ProductFormErrors>({
    name: "",
    price: "",
    stock: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm=():ProductFormErrors=>{
       const newErrors: ProductFormErrors = {
      name: "",
      price: "",
      stock: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Product name must be at least 3 characters";
    }

    // Price validation
    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (Number(formData.price) <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    // Stock validation
    if (!formData.stock) {
      newErrors.stock = "Stock is required";
    } else if (Number(formData.stock) < 0) {
      newErrors.stock = "Stock cannot be negative";
    } else if (!Number.isInteger(Number(formData.stock))) {
      newErrors.stock = "Stock must be a whole number";
    }

    return newErrors;

  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const  newErrors=validateForm();
    setErrors(newErrors);

    // Stop if there are validation errors
    if (newErrors.name || newErrors.price || newErrors.stock) {
      return;
    }

    const product:Product = {
      name: formData.name.trim(),
      price: Number(formData.price),
      stock: Number(formData.stock),
    };

    console.log("Product submitted:", product);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-5">
      {/* Product Name */}
      <div className="space-y-1">
        <label
          htmlFor="name"
          className="block font-medium"
        >
          Product Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          className="w-full rounded-lg border px-3 py-2"
        />

        {errors.name && (
          <p className="text-sm text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      {/* Price */}
      <div className="space-y-1">
        <label
          htmlFor="price"
          className="block font-medium"
        >
          Price
        </label>

        <input
          id="price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
          className="w-full rounded-lg border px-3 py-2"
        />

        {errors.price && (
          <p className="text-sm text-red-500">
            {errors.price}
          </p>
        )}
      </div>

      {/* Stock */}
      <div className="space-y-1">
        <label
          htmlFor="stock"
          className="block font-medium"
        >
          Stock
        </label>

        <input
          id="stock"
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Enter stock quantity"
          className="w-full rounded-lg border px-3 py-2"
        />

        {errors.stock && (
          <p className="text-sm text-red-500">
            {errors.stock}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="rounded-lg bg-black px-4 py-2 text-white"
      >
        Add Product
      </button>
    </form>
  );
}