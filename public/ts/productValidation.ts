document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("productForm") as HTMLFormElement | null;

    const displayErrors = (fieldId: string, message: string): void => {
        const errorElement = document.getElementById(`${fieldId}Error`);
        if (errorElement instanceof HTMLSpanElement) {
            errorElement.textContent = message;
        }

        const inputElement = document.getElementById(fieldId);
        if (inputElement instanceof HTMLInputElement) {
            inputElement.classList.add("error-border");
        }
    };

    const clearErrors = (): void => {
        document.querySelectorAll<HTMLSpanElement>(".error-message").forEach((error) => {
            error.textContent = "";
        });

        document.querySelectorAll<HTMLInputElement>(".error-border").forEach((input) => {
            input.classList.remove("error-border");
        });
    };

    const validateProductForm = (): boolean => {
        const nameInput = document.getElementById("productName") as HTMLInputElement | null;
        const categoryInput = document.getElementById("category") as HTMLInputElement | null;
        const stockInput = document.getElementById("stock") as HTMLInputElement | null;
        const priceInput = document.getElementById("price") as HTMLInputElement | null;

        if (!nameInput || !categoryInput || !stockInput || !priceInput) {
            throw new Error("Product form fields are missing.");
        }

        const name: string = nameInput.value.trim();
        const category: string = categoryInput.value.trim();
        const stock: number = parseInt(stockInput.value.trim());
        const price: number = parseFloat(priceInput.value.trim());
        let isValid = true;

        clearErrors();

        // Validate product name
        if (!name) {
            displayErrors("productName", "Product name is required.");
            isValid = false;
        } else if (name.length < 2) {
            displayErrors("productName", "Product name must be at least 2 characters long.");
            isValid = false;
        }

        // Validate category
        if (!category) {
            displayErrors("category", "Category is required.");
            isValid = false;
        } else if (category.length < 2) {
            displayErrors("category", "Category must be at least 2 characters long.");
            isValid = false;
        }

        // Validate stock
        if (isNaN(stock)) {
            displayErrors("stock", "Stock quantity is required.");
            isValid = false;
        } else if (stock < 0) {
            displayErrors("stock", "Stock quantity cannot be negative.");
            isValid = false;
        }

        // Validate price
        if (isNaN(price)) {
            displayErrors("price", "Price is required.");
            isValid = false;
        } else if (price < 0) {
            displayErrors("price", "Price cannot be negative.");
            isValid = false;
        }

        return isValid;
    };

    if (productForm) {
        productForm.addEventListener("submit", (event: SubmitEvent) => {
            event.preventDefault();

            const isValid = validateProductForm();
            if (isValid) {
                productForm.submit();
            }
        });

        // Clear error messages on input
        document.querySelectorAll<HTMLInputElement>('input').forEach((input) => {
            input.addEventListener("input", () => {
                clearErrors();
            });
        });
    }
});