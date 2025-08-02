// To-Do App with LocalStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    if(taskList){
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.onclick = () => { deleteTask(index); };
        li.appendChild(delBtn);
        taskList.appendChild(li);
      });
    }
  }
  
  function addTask() {
    const input = document.getElementById('taskInput');
    if(input.value.trim() === '') return alert('Enter a task');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(input.value.trim());
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
    loadTasks();
  }
  
  function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
  
  window.onload = loadTasks;
  
  // Product Listing
  const products = [
    { name: 'Laptop', category: 'electronics', price: 800 },
    { name: 'Phone', category: 'electronics', price: 500 },
    { name: 'T-Shirt', category: 'clothing', price: 20 },
    { name: 'Jeans', category: 'clothing', price: 40 }
  ];
  
  function displayProducts(list) {
    const container = document.getElementById('productContainer');
    if(container){
      container.innerHTML = '';
      list.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `<h4>${p.name}</h4><p>$${p.price}</p>`;
        container.appendChild(card);
      });
    }
  }
  
  function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    displayProducts(filtered);
  }
  
  function sortProducts() {
    const order = document.getElementById('priceSort').value;
    let sorted = [...products];
    if(order === 'low') sorted.sort((a,b)=>a.price-b.price);
    if(order === 'high') sorted.sort((a,b)=>b.price-a.price);
    displayProducts(sorted);
  }
  
  displayProducts(products);
  