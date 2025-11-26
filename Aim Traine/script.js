// --- Elementlar ---
const initialInput = document.getElementById("initialInput");
const saveInitialBtn = document.getElementById("saveInitialBtn");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const totalAmountEl = document.getElementById("totalAmount");
const spentAmountEl = document.getElementById("spentAmount");
const remainingAmountEl = document.getElementById("remainingAmount");
const expensesList = document.getElementById("expensesList");
const clearAllBtn = document.getElementById("clearAllBtn");
const year = document.getElementById("year");

// --- O'zgaruvchilar ---
let total = 0;
let spent = 0;

// --- Yilni avtomatik qo'yish ---
year.textContent = new Date().getFullYear();

// --- Boshlang'ich summani saqlash ---
saveInitialBtn.addEventListener("click", () => {
    const value = parseFloat(initialInput.value);
    if (!value || value <= 0) return;

    total = value;
    updateUI();
});

// --- Xarajat qo'shish ---
addExpenseBtn.addEventListener("click", () => {
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value);

    if (!name || !amount || amount <= 0) return;

    spent += amount;

    // Xarajatni ro'yxatga qo'shish
    const item = document.createElement("div");
    item.className = "expense-item";
    item.innerHTML = `${name} <span>${amount.toLocaleString()} so'm</span>`;
    expensesList.appendChild(item);

    // Maydonlarni tozalash
    expenseName.value = "";
    expenseAmount.value = "";

    updateUI();
});

// --- UI yangilash funksiyasi ---
function updateUI() {
    totalAmountEl.textContent = total.toLocaleString() + " so'm";
    spentAmountEl.textContent = spent.toLocaleString() + " so'm";
    remainingAmountEl.textContent = (total - spent).toLocaleString() + " so'm";

    if (expensesList.children.length === 0) {
        expensesList.innerHTML = '<p class="muted">Hozircha xarajatlar yo\'q</p>';
    }
}

// --- Hammasini tozalash ---
clearAllBtn.addEventListener("click", () => {
    total = 0;
    spent = 0;
    expensesList.innerHTML = '<p class="muted">Hozircha xarajatlar yo\'q</p>';
    updateUI();
});
