function is_chocolate_in_selected_array(chocolate, selectedChocolates) {
    let found = false;
    for (let i = 0; i < selectedChocolates.length; i++) {
        if (chocolate.id === selectedChocolates[i].id) {
            found = true;
            break;
        }
    }
    return found;
}


function createCustomPack() {
    // Get the list of chocolates.
    const chocolates = [
        {
            id: 1,
            name: "Milk Chocolate",
            price: 2.00,
        },
        {
            id: 2,
            name: "Dark Chocolate",
            price: 3.00,
        },
        {
            id: 3,
            name: "White Chocolate",
            price: 4.00,
        },
        {
            id: 4,
            name: "cold Chocolate",
            price: 2.00,
        },
        {
            id: 5,
            name: "rich Chocolate",
            price: 3.00,
        },
        {
            id: 6,
            name: "Brown Chocolate",
            price: 4.00,
        },
        {
            id: 7,
            name: "White Chocolate",
            price: 2.00,
        },
        {
            id: 8,
            name: "cream & Chocolate",
            price: 3.00,
        }
    ];

    // Create an empty array to store the selected chocolates.
    const selectedChocolates = [];

    // Add event listeners to the chocolate buttons.
    for (const chocolate of chocolates) {
        const chocolateButton = document.getElementById(`chocolate-${chocolate.id}`);
        chocolateButton.addEventListener("click", () => {

            // Check if the chocolate is already in the selected array.
            if (is_chocolate_in_selected_array(chocolate, selectedChocolates)) {
                // Do not add the chocolate to the selected array.
                return;
            }

            // Add the chocolate to the selected chocolates array.
            selectedChocolates.push(chocolate);

            // Calculate the total price of the selected chocolates.
            const totalPrice = selectedChocolates.reduce((accumulator, chocolate) => {
                return accumulator + chocolate.price;
            }, 0);

            // Update the total price display.
            document.getElementById("length").innerHTML = selectedChocolates.length;

            // Update the total price display.
            document.getElementById("total-price").innerHTML = totalPrice;
        });
        console.log(selectedChocolates)
    }

    // Check if the total number of selected chocolates exceeds 8.
    if (selectedChocolates.length > 8) {
        // Disable the "Add to Cart" button.
        alert("Maximum number of chocalte have you selected")
        document.getElementById("add-to-cart-button").disabled = true;
    } else {
        // Enable the "Add to Cart" button.
        document.getElementById("add-to-cart-button").disabled = false;
    }
}

// Call the createCustomPack() function when the page loads.
document.addEventListener("DOMContentLoaded", createCustomPack);