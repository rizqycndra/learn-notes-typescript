// Tipe data untuk status pesanan
type OrderStatus = "Pending" | "Processing" | "Shipped" | "Delivered";

type OrderDetail = {
    status: OrderStatus
}

const order: OrderDetail = {
    status: "Pending"
}

// Fungsi untuk memeriksa status pesanan
function checkOrderStatus(status: OrderStatus) {
    console.log("Status pesanan:", status);
}

// Memanggil fungsi dengan nilai yang valid
checkOrderStatus("Pending"); // Output: Status pesanan: Pending
checkOrderStatus("Delivered"); // Output: Status pesanan: Delivered
console.log(order)

// Memanggil fungsi dengan nilai yang tidak valid
// checkOrderStatus("Cancelled"); // Error: Argument of type '"Cancelled"' is not assignable to parameter of type 'OrderStatus'.
