
const api_url = "http://localhost:8000/books";

const fetchBooks = async () => {
    try{
        const res = await fetch(api_url);
        const data = await res.json();
        const displayBox = document.getElementById("displayBox");
        displayBox.innerHTML = `
            <table>
                <!-- Phần đầu bảng (Tiêu đề) -->
                <thead>
                    <tr class="header">
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="tBody"></tbody>
            </table>
        `;
        const tbody = document.getElementById("tBody");
        data.forEach((key, index) => {
            tbody.innerHTML += `
                <tr>
                    <td>${index+1}</td>
                    <td>${key.name}</td>
                    <td>${key.author}</td>
                    <td>
                    <button class="btnDel" onclick="deleteBook('${key.id}')">Xóa</button>
                </td>
                </tr>
            `;
        })
    }
    catch (error) {
        console.log("Loi",error.message);
    }
};
fetchBooks();

//add books
const addBook = async (title, author) => {
    try{
        const res = await fetch(api_url, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                name: title,
                author: author
            })
        });
        if(res.ok) {
            fetchBooks();
    }
        } 
    catch (error) {
        console.log("Loi",error.message);
    }
};

document.getElementById("btnSubmit").addEventListener("click", () => {
    const name = document.getElementById("name");
    const taskName = name.value.trim();
    const author = document.getElementById("author");
    const taskAuthor = author.value.trim();
    if(taskName === "" )
    {
        alert("Chua nhap ten");
        return;
    }
    addBook(taskName, taskAuthor);
    name.value = "";
    author.value = "";

})

//delete
const deleteBook = async (bookId) =>{
    try{
        const res = await fetch(`${api_url}/${bookId}`, {
            method: "DELETE"
        });
        if(res.ok) {
            fetchBooks();
        }
    }
    catch (error) {
        console.log("Loi",error.message);
    }
};