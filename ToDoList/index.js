document.addEventListener("DOMContentLoaded", function() {
    var press = document.getElementById("Addlist");
    press.onclick = function() {
        const TextValue = document.getElementById("ToDoText").value;

        const para = document.createElement("p");
        para.textContent = TextValue;

        const delButton = document.createElement("button");
        delButton.textContent = "Delete";

        // Append the delete button to the paragraph
        para.appendChild(delButton);
        
        // Append the paragraph (with delete button) to the div
        document.getElementById("myDIV").appendChild(para);

        // Add delete functionality to the button
        delButton.onclick = function() {
            document.getElementById("myDIV").removeChild(para);
        };
    };
});
