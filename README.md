````markdown
# 🔐 Strong Password Validator

A modern and responsive password validator built with HTML, CSS, and Vanilla JavaScript.  
The project analyzes password strength in real time, displaying security criteria and dynamic visual feedback to enhance the user experience.

---

# 📸 Preview

Simple, elegant, and intuitive interface for password validation.
<a href="https://akiz-dev.github.io/password-validator/">Live Password Validator</a>

### Visual Features
- Show/Hide password 👁️
- Real-time feedback ⚡
- Password strength indicators 🔒
- Responsive interface 📱

---

# 🚀 Features

✅ Real-time password validation  
✅ Minimum character validation  
✅ Uppercase letter verification  
✅ Number verification  
✅ Special symbol verification  
✅ Visual password strength indicator  
✅ Toggle password visibility  
✅ Modern and responsive design  

---

# 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Font Awesome
- Google Fonts (Poppins)

---

# 📂 Project Structure

```bash
strong-password-validator/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
```

---

# 🎯 Validation Criteria

The password is analyzed based on the following criteria:

| Criteria | Status |
|----------|--------|
| Minimum of 8 characters | ✅ |
| At least 1 uppercase letter | ✅ |
| At least 1 number | ✅ |
| At least 1 special symbol | ✅ |

---

# 💡 Security Levels

| Level | Description |
|------|-------------|
| ✗ Low | Weak password |
| ⚠ Medium | Medium-strength password |
| 🔒 Strong Password | Strong password |

---

# 📦 How to Run the Project

## 1. Clone the repository

```bash
git clone git@github.com:akiz-dev/password-validator.git
```

## 2. Access the project folder

```bash
cd strong-password-validator
```

## 3. Open the `index.html` file

You can open it directly in your browser or use an extension such as:

- Live Server (VS Code)

---

# 🧠 How It Works

JavaScript listens for typing events in the password input field:

```javascript
pswInput.addEventListener('keyup', validatePassword)
```

On every key press, the function:

- Checks password length
- Identifies uppercase letters
- Detects numbers
- Validates special symbols
- Dynamically updates the interface

---

# 🎨 Interface

The project uses:

- CSS Variables (`:root`) for easy customization
- Flexbox for layout alignment
- Utility classes for visual states
- Font Awesome icons

---

# 📱 Responsiveness

The interface was designed to work seamlessly on:

- Desktop 💻
- Tablet 📱
- Smartphones 📲

---

# 🔮 Future Improvements

- Visual password strength bar
- Smooth animations
- Dark/Light theme support
- Repeated character validation
- Backend integration
- Automated tests

---

# 🤝 Contribution

Contributions are welcome!

1. Fork the project
2. Create a branch:

```bash
git checkout -b my-feature
```

3. Commit your changes:

```bash
git commit -m "feat: my new feature"
```

4. Push to the repository:

```bash
git push origin my-feature
```

5. Open a Pull Request 🚀

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed with dedication by Akiz 🚀
````
